import { Module } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { MetricResolver } from './metric.resolver';
import { MetricService } from './metric.service';

@Module({
  controllers: [MetricResolver],
  providers: [MetricResolver, MetricService, MetricRepository],
  exports: [MetricResolver],
})
export class MetricModule {}
