import { getAllMetricDto } from './dto/request';
import { Metric } from '../../database/entities/metric.entity';
import {
  EntityRepository,
  Repository,
  createConnection,
  getConnection,
  getManager,
} from 'typeorm';

@EntityRepository(Metric)
export class MetricRepository extends Repository<Metric> {
  async getAll(input: getAllMetricDto) {
    const result = await Metric.find();

    let manager;

    try {
      manager = getConnection().manager; // Thử lấy manager từ kết nối hiện tại
    } catch (error) {
      // Nếu không có kết nối, tạo một kết nối mới
      const connection = await createConnection();
      manager = connection.manager;
    }

    const result2QueryBuilder = manager
      .createQueryBuilder(Metric, 'metrics')
      .leftJoinAndSelect('metrics.metricType', 'metricType')
      .where('metrics.userID = :userId', { userId: 1 });

    const result2 = await result2QueryBuilder.getMany();

    console.log('result2', result2);

    console.log('result', result);
    return result;
  }
}
