import { Injectable } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { getAllMetricDto } from './dto/request';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetricService {
  constructor(
    @InjectRepository(MetricRepository) private repository: MetricRepository,
  ) {}

  async getAll(input: getAllMetricDto) {
    return await this.repository.getAll(input);
  }
}
