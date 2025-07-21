import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

interface ISchedule {
  id: string;
  daytime: string;
  hall: number;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

interface IFilm {
  id: string;
  rating: number;
  director: string;
  tags: string[];
  image: string;
  cover: string;
  title: string;
  about: string;
  description: string;
  schedule: ISchedule[];
}

@Schema()
export class Schedule {
  @Prop({ type: Types.ObjectId, ref: 'Film', required: true })
  filmId: Types.ObjectId;
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  daytime: string;
  @Prop({ required: true })
  hall: number;
  @Prop({ required: true })
  rows: number;
  @Prop({ required: true })
  seats: number;
  @Prop({ required: true })
  price: number;
  @Prop({ type: [String], default: [] })
  taken: string[];
}
export const ScheduleSchema = SchemaFactory.createForClass(Schedule);

@Schema()
export class Film implements IFilm {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  rating: number;
  @Prop({ required: true })
  director: string;
  @Prop([String])
  tags: string[];
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  cover: string;
  @Prop({ required: true })
  title: string;
  @Prop()
  about: string;
  @Prop()
  description: string;
  @Prop({ type: [ScheduleSchema] })
  schedule: ISchedule[];
}
export const FilmSchema = SchemaFactory.createForClass(Film);
