import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { MetricType } from './metricType.entity';

@Entity({ name: 'units' })
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 50, nullable: false })
  name: string;

  @Column({ name: 'metrictypeid' })
  metricTypeID: number;

  @ManyToOne(() => MetricType, (metricType) => metricType.units)
  @JoinColumn({ name: 'metrictypeid' })
  metricType: MetricType;
}
