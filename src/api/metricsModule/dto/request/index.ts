import { Transform } from 'class-transformer';
import { IsDate, IsOptional, Validate, IsNumber } from 'class-validator';
import { UserValidator } from '../../validator/metric.input.validator';
import { MetricTypeValidator } from '../../validator/metricType.input.validator';

export class AllMetricDto {
  @Validate(UserValidator, {
    message: `User is invalid input.`,
  })
  userId: number;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  startAt?: Date;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  endAt?: Date;

  @IsOptional()
  @Validate(MetricTypeValidator, {
    message: `Metric Type is invalid input.`,
  })
  type?: number; // type metric (Distance / Temperature)

  @IsOptional()
  unit?: number; // (Meter, centimeter, inch, feet, yard) or (°C, °F, °K)

  @IsOptional()
  latest?: boolean; // Specify latest metric in one day 
}

export class CreateMetricDto {
  @Validate(UserValidator, {
    message: `User is invalid input.`,
  })
  userId: number;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;

  @IsNumber()
  value: number;

  @Validate(MetricTypeValidator, {
    message: `Metric Type is invalid input.`,
  })
  type: number; // type metric (Distance / Temperature)

  unit: number; // (Meter, centimeter, inch, feet, yard) or (°C, °F, °K)
}
