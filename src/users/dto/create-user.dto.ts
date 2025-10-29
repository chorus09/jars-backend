// src/users/dto/create-user.dto.ts
import { IsString, IsIn, Length, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly username: string;

  @IsString()
  @Length(6, 30)
  readonly password: string;

  @IsIn(['admin', 'client'])
  readonly role: string;

  @IsOptional()
  @IsString()
  readonly email?: string;
}
