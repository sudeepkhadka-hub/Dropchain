import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  Min,
} from 'class-validator';

export class CreateFileDropDto {
  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  maxViews?: number;

  @IsOptional()
  @IsDateString()
  expiresAt?: string;
}