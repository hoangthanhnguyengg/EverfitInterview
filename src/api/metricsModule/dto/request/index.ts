import { Transform } from 'class-transformer';
import { IsDate, IsOptional, Validate } from 'class-validator';
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
}

export class addNewMetricDto {
  date: Date;
  value: number;
  unit: number;
}
