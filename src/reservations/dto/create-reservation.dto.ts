import { 
  IsNumber, 
  IsString, 
  Length, 
  IsOptional, 
  Min, 
  ValidateIf 
} from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  readonly id: number;

  @IsNumber()
  readonly flightId: number;

  @IsString()
  @Length(3, 50)
  readonly clientName: string;

  @IsString()
  @Length(2, 5)
  readonly seat: string;

  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly clientEmail?: string;
}
