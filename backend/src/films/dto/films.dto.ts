import {
  IsNumber,
  IsFQDN,
  IsString,
  IsArray,
  IsDateString,
  IsInt,
  IsUUID,
} from 'class-validator';

class GetScheduleDTO {
  @IsUUID()
  id: string;
  @IsDateString()
  daytime: string;
  @IsInt()
  hall: number;
  @IsInt()
  rows: number;
  @IsInt()
  seats: number;
  @IsNumber()
  price: number;
  @IsArray()
  taken: string[];
}

export class GetFilmDTO {
  @IsUUID()
  id: string;
  @IsNumber()
  rating: number;
  @IsString()
  director: string;
  @IsArray()
  tags: string[];
  @IsFQDN()
  image: string;
  @IsFQDN()
  cover: string;
  @IsString()
  title: string;
  @IsString()
  about: string;
  @IsString()
  description: string;
  @IsArray()
  schedule: GetScheduleDTO[];
}
