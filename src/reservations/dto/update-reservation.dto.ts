import { IsOptional, IsString, IsNumber, Length, ValidateIf } from 'class-validator';

export class UpdateReservationDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  readonly clientName?: string;

  @IsOptional()
  @IsString()
  @Length(2, 5)
  readonly seat?: string;

  @IsOptional()
  @IsNumber()
  readonly price?: number;

  @IsOptional()
  @IsString()
  readonly clientEmail?: string;
}
