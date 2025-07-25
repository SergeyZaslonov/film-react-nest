import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity('films')
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'double precision' })
  rating: number;
  @Column()
  director: string;
  @Column()
  tags: string;
  @Column()
  image: string;
  @Column()
  cover: string;
  @Column()
  title: string;
  @Column()
  about: string;
  @Column()
  description: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  schedules: Schedule[];
}
