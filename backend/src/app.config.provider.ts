import { ConfigModule } from '@nestjs/config';

export interface AppConfig {
  database: AppConfigDatabase;
}

export interface AppConfigDatabase {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const configProvider = {
  imports: [ConfigModule.forRoot()],
  provide: 'CONFIG',
  useValue: <AppConfig>{
    database: {
      type: process.env.DATABASE_DRIVER || 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME || 'afisha',
      password: process.env.DATABASE_PASSWORD || 'afisha',
      database: process.env.DATABASE_NAME || 'afisha',
    },
  },
};
