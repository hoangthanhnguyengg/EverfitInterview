import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  Index,
} from 'typeorm';
import { User } from './user.entity';
import { MetricType } from './metricType.entity';

@Entity({ name: 'metrics' })
export class Metric extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Index({ unique: true })
  id: number;

  @Column({ name: 'userid' })
  userID: number;

  @Column({ name: 'metrictypeid' })
  metricTypeID: number;

  @ManyToOne(() => User, (user) => user.metrics)
  @JoinColumn({ name: 'userid' })
  user: User;

  @ManyToOne(() => MetricType, (metricType) => metricType.metrics)
  @JoinColumn({ name: 'metrictypeid' })
  metricType: MetricType;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;
}
