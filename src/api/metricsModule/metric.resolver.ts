import { Controller, Get, Query } from '@nestjs/common';
import { MetricService } from './metric.service';
import { getAllMetricDto } from './dto/request';

@Controller('/metric')
export class MetricResolver {
  constructor(private service: MetricService) {}

  @Get()
  async find() {
    return 'oki';
  }

  @Get('/getAll')
  async getAll(@Query() input: getAllMetricDto) {
    return await this.service.getAll(input);
  }
}
