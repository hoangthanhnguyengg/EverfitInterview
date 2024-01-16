import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Metric } from './metric';

@Entity({ name: 'metrictypes' })
export class MetricType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  typeName: string;

  @OneToMany(() => Metric, (metric) => metric.metricType)
  metrics: Metric[]; // Define the 'metrics' property
}
