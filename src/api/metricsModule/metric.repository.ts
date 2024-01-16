import { Injectable } from '@nestjs/common';
import { getAllMetricDto } from './dto/request';
import { Metric } from '../../database/entities/metric';

@Injectable()
export class MetricRepository {
  async getAll(input: getAllMetricDto) {
    const result = await Metric.find();
    console.log('result', result);
    return result;
  }
}
