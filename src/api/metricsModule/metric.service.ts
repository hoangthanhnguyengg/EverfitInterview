import { Injectable } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { getAllMetricDto } from './dto/request';

@Injectable()
export class MetricService {
  constructor(private repository: MetricRepository) {}

  async getAll(input: getAllMetricDto) {
    return await this.repository.getAll(input);
  }
}
