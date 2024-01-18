import { AllMetricDto } from './dto/request';
import { Metric } from '../../database/entities/metric.entity';
import { createConnection, getConnection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Unit } from 'src/database/entities/unit.entity';

@Injectable()
export class MetricRepository {
  async getAll(input: AllMetricDto) {
    const userId = 1;
    let manager;

    try {
      manager = getConnection().manager; // get defautl connection
    } catch (error) {
      // if this connection is not exist, create new one
      const connection = await createConnection();
      manager = connection.manager;
    }

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

    const result = await queryBuilder.getMany();
    return result;
  }

  async getMetricTypeAndUnit(metricTypeId: number): Promise<Unit[]> {
    const units = await Unit.find({
      where: {
        metricTypeID: metricTypeId,
      },
      relations: ['metricType'],
    });

    return units;
  }
}
