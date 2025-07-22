import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from '../entities/film.entity';
import { Schedule } from '../entities/schedule.entity';

@Injectable()
export class FilmsRepository {
  constructor(
    @InjectRepository(Film) private filmRepository: Repository<Film>,
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async findAll(): Promise<Film[]> {
    return await this.filmRepository.find();
  }

  async findById(id: string): Promise<Film | null> {
    return await this.filmRepository.findOne({
      where: { id },
      relations: ['schedules'],
    });
  }

  async updateFilmSession(
    film: string,
    session: string,
    seats: string,
  ): Promise<void> {
    await this.scheduleRepository.update(
      { id: session, film: { id: film } },
      { taken: seats },
    );
  }
}
