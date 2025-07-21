import {
  IsArray,
  IsDateString,
  IsInt,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTicketDTO {
  @IsUUID()
  id: string;
  @IsUUID()
  film: string;
  @IsUUID()
  session: string;
  @IsDateString()
  daytime: string;
  @IsInt()
  row: number;
  @IsInt()
  seat: number;
  @IsNumber()
  price: number;
}

export class CreateOrderDTO {
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsArray()
  tickets: CreateTicketDTO[];
}
