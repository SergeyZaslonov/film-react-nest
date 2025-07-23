import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from './film.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  daytime: string;
  @Column('integer')
  hall: number;
  @Column('integer')
  rows: number;
  @Column('integer')
  seats: number;
  @Column({ type: 'double precision' })
  price: number;
  @Column()
  taken: string;

  @ManyToOne(() => Film, (film) => film.schedules)
  film: Film;
}
