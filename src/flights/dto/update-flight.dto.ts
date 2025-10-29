import { IsOptional, IsString, IsIn, IsNumber, Length, ValidateIf } from 'class-validator';

export class UpdateFlightDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly from?: string;

  @IsOptional()
  @IsString()
  readonly to?: string;

  @IsOptional()
  @IsString()
  readonly departureTime?: string;

  @IsOptional()
  @IsString()
  readonly arrivalTime?: string;

  @IsOptional()
  @IsNumber()
  readonly price?: number;

  @IsOptional()
  @IsIn(['scheduled', 'delayed', 'cancelled', 'completed'])
  readonly status?: string;
}
