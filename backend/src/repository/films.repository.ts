import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film } from '../films/films.schema';

@Injectable()
export class FilmsRepository {
  constructor(@InjectModel('Film') private filmModel: Model<Film>) {}

  async findAll(): Promise<Film[]> {
    return await this.filmModel.find().exec();
  }

  async findById(id: string): Promise<Film | null> {
    return await this.filmModel.findOne({ id }).exec();
  }

  async updateFilmSession(
    film: string,
    session: string,
    seats: string[],
  ): Promise<void> {
    await this.filmModel
      .updateOne(
        { id: film, 'schedule.id': session },
        { $set: { 'schedule.$.taken': seats } },
      )
      .exec();
  }
}
