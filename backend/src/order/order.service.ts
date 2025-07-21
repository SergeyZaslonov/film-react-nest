import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDTO, CreateTicketDTO } from './dto/order.dto';
import { FilmsRepository } from 'src/repository/films.repository';
import { faker } from '@faker-js/faker';

@Injectable()
export class OrderService {
  constructor(private readonly filmsRepository: FilmsRepository) {}
  async createOrder(order: CreateOrderDTO): Promise<CreateTicketDTO[]> {
    const tickets: CreateTicketDTO[] = [];
    for (const ticket of order.tickets) {
      const { film, session, row, seat } = ticket;
      const currentFilm = await this.filmsRepository.findById(film);
      if (!currentFilm) {
        throw new BadRequestException(`Фильм с id ${film} не найден`);
      }
      const schedule = currentFilm.schedule?.find((s) => s.id === session);
      if (!schedule) {
        throw new BadRequestException(`Сеанс с id ${session} не найден`);
      }
      const place = `${row}:${seat}`;
      if (schedule.taken?.includes(place)) {
        throw new BadRequestException(`Место ${place} занято`);
      }

      schedule.taken = schedule.taken || [];
      schedule.taken.push(place);

      tickets.push({
        id: faker.string.uuid(),
        film,
        session,
        row,
        seat,
        daytime: schedule.daytime,
        price: schedule.price,
      });

      await this.filmsRepository.updateFilmSession(
        film,
        session,
        schedule.taken,
      );
    }
    return tickets;
  }
}
