import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MetricModule } from './api/metricsModule/metric.module';

@Module({
  imports: [DatabaseModule, MetricModule],
})
export class AppModule {}
