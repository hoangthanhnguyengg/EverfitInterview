import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Metric } from './metric.entity';
import { Unit } from './unit.entity';

@Entity({ name: 'metrictypes' })
export class MetricType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'typename', length: 50 })
  typeName: string;

  @OneToMany(() => Metric, (metric) => metric.metricType)
  metrics: Metric[];

  @OneToMany(() => Unit, (unit) => unit.metricType)
  units: Unit[];
}
