import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';
import { MongooseModule } from '@nestjs/mongoose';

import { configProvider } from './app.config.provider';
import { FilmSchema } from './films/films.schema';
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
    MongooseModule.forRoot(configProvider.useValue.database.url),
    MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }]),
  ],
  controllers: [OrderController, FilmsController],
  providers: [configProvider, FilmsRepository, FilmsService, OrderService],
})
export class AppModule {}
