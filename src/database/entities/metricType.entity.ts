import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Metric } from './metric.entity';

@Entity({ name: 'metrictypes' })
export class MetricType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'typename', length: 50 })
  typeName: string;

  @OneToMany(() => Metric, (metric) => metric.metricType)
  metrics: Metric[]; // Define the 'metrics' property
}
