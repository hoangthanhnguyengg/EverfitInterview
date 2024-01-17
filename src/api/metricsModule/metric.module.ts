import { Module } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { MetricResolver } from './metric.resolver';
import { MetricService } from './metric.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetricRepository])],
  controllers: [MetricResolver],
  providers: [MetricResolver, MetricService, MetricRepository],
  exports: [MetricResolver],
})
export class MetricModule {}
