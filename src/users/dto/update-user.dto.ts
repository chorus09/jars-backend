// src/users/dto/update-user.dto.ts
import { IsOptional, IsString, IsIn, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(3, 20)
  readonly username?: string;

  @IsOptional()
  @IsString()
  @Length(6, 30)
  readonly password?: string;

  @IsOptional()
  @IsIn(['admin', 'client'])
  readonly role?: string;

  @IsOptional()
  @IsString()
  readonly email?: string;
}
