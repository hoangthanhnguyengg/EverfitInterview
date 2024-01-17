import { Injectable } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { AllMetricDto } from './dto/request';

@Injectable()
export class MetricService {
  constructor(private repository: MetricRepository) {}

  async getAll(input: AllMetricDto) {
    return await this.repository.getAll(input);
  }
}
