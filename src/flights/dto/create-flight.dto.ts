import { 
  IsString,
  IsNumber,
  IsIn,
  IsOptional,
  ValidateIf,
  Length,
  Min,
  Max
} from 'class-validator';

export class CreateFlightDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  @Length(3, 50, { message: 'Flight name must be between 3 and 50 characters' })
  readonly name: string;

  @IsString()
  @Length(2, 50)
  readonly from: string;

  @IsString()
  @Length(2, 50)
  readonly to: string;

  @IsString()
  readonly departureTime: string;

  @IsString()
  readonly arrivalTime: string;

  @IsNumber()
  @Min(100)
  @Max(10000)
  readonly price: number;

  @IsIn(['scheduled', 'delayed', 'cancelled', 'completed'])
  readonly status: string;
}
