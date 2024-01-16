import { Transform } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class getAllMetricDto {
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  startAt?: Date;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  endAt?: Date;

  @IsOptional()
  type?: number; // type metric (Distance / Temperature)

  @IsOptional()
  unit?: number; // (Meter, centimeter, inch, feet, yard) or (°C, °F, °K)
}

export class addNewMetricDto {
  date: Date;
  value: number;
  unit: number;
}
