
import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateFileDropDto {
  @IsString()
  @IsOptional()
  filename?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsInt()
  @IsOptional()
  @Type(() => Number) 
  maxViews?: number;

  @IsDate()
  @IsOptional()
  expiresAt?: Date;
}