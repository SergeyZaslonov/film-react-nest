import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';
import { DataSourceOptions } from 'typeorm';

import { configProvider } from './app.config.provider';
import { Film } from './entities/film.entity';
import { Schedule } from './entities/schedule.entity';
import { FilmsRepository } from './repository/films.repository';
import { FilmsService } from './films/films.service';
import { FilmsController } from './films/films.controller';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
      renderPath: '/content/afisha/*',
    }),
    TypeOrmModule.forRoot({
      type: configProvider.useValue.database.type,
      host: configProvider.useValue.database.host,
      port: configProvider.useValue.database.port,
      username: configProvider.useValue.database.username,
      password: configProvider.useValue.database.password,
      database: configProvider.useValue.database.database,
      entities: [Film, Schedule],
      synchronize: true,
    } as DataSourceOptions),
    TypeOrmModule.forFeature([Film, Schedule]),
  ],
  controllers: [OrderController, FilmsController],
  providers: [configProvider, FilmsRepository, FilmsService, OrderService],
})
export class AppModule {}
