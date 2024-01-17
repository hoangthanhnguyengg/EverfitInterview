import { AllMetricDto } from './dto/request';
import { Metric } from '../../database/entities/metric.entity';
import { createConnection, getConnection } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricRepository {
  async getAll(input: AllMetricDto) {
    const result = await Metric.find();
    const userId = 1;
    let manager;

    try {
      manager = getConnection().manager; // Thử lấy manager từ kết nối hiện tại
    } catch (error) {
      // Nếu không có kết nối, tạo một kết nối mới
      const connection = await createConnection();
      manager = connection.manager;
    }

    console.log('inputinput', input);

    const queryBuilder = manager
      .createQueryBuilder(Metric, 'metrics')
      .leftJoinAndSelect('metrics.metricType', 'metricType')
      .where('metrics.userID = :userId', { userId });

    if (input.type) {
      queryBuilder.andWhere('metrics.metricType.id = :type', {
        type: input.type,
      });
    }

    if (input.startAt) {
      queryBuilder.andWhere('metrics.date >= :startAt', {
        startAt: input.startAt,
      });
    }

    if (input.endAt) {
      queryBuilder.andWhere('metrics.date <= :endAt', { endAt: input.endAt });
    }

    //const result2 = await queryBuilder.getMany();

    return result;
  }
}
