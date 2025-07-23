import { BadRequestException, Injectable } from '@nestjs/common';
import { FilmsRepository } from '../repository/films.repository';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: FilmsRepository) {}

  async findAll() {
    const items = await this.filmsRepository.findAll();
    const total = items.length;
    return { total, items };
  }

  async findById(id: string) {
    const film = await this.filmsRepository.findById(id);
    if (!film) {
      throw new BadRequestException(`Фильм с id=${id} не найден`);
    }
    return film;
  }

  async getSchedule(id: string) {
    const film = await this.findById(id);
    return {
      total: film.schedules.length,
      items: film.schedules,
    };
  }
}
