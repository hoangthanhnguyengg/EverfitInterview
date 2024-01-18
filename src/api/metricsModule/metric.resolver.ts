import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MetricService } from './metric.service';
import { AllMetricDto, CreateMetricDto } from './dto/request';
import { MetricResponse } from './dto/response';

@Controller('/metric')
export class MetricResolver {
  constructor(private service: MetricService) {}

  @Get('/getAll')
  async getAll(@Query() input: AllMetricDto): Promise<MetricResponse[]> {
    return await this.service.getAll(input);
  }

  @Post('/createOne')
  async createOne(@Body() input: CreateMetricDto) {
    return await this.service.createOne(input);
  }
}
