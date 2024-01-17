import { Controller, Get, Query } from '@nestjs/common';
import { MetricService } from './metric.service';
import { AllMetricDto } from './dto/request';

@Controller('/metric')
export class MetricResolver {
  constructor(private service: MetricService) {}

  @Get('/getAll')
  async getAll(@Query() input: AllMetricDto) {
    return await this.service.getAll(input);
  }
}
