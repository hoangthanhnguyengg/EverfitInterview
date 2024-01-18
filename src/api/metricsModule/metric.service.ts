import { BadRequestException, Injectable } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { AllMetricDto } from './dto/request';
import {
  MetricType,
  typeValidTemperatureUnits,
  validDistanceUnits,
} from 'src/common/constants';
import { Metric } from 'src/database/entities/metric.entity';
import {
  convertDistance,
  convertTemperature,
} from 'src/common/utils/caculation';

@Injectable()
export class MetricService {
  constructor(private repository: MetricRepository) {}

  async getAll(input: AllMetricDto) {
    //*** Begin validate Time ***//
    if (input.startAt && input.endAt) {
      const startDate = new Date(input.startAt);
      const endDate = new Date(input.endAt);

      if (startDate.getTime() > endDate.getTime()) {
        throw new BadRequestException('StartAt cannot bigger than endAt');
      }
    }
    //*** End validate Time ***//

    //*** Begin validate type & unit ***//
    let result = await this.repository.getAll(input);
    if (input.type) {
      const units = await this.repository.getMetricTypeAndUnit(input.type);

      if (input.unit) {
        //*** Check unit is valid ***//
        const validUnit = units.find((item) => item.id === Number(input.unit));

        if (validUnit) {
          if (validUnit.metricType.typeName == MetricType.DISTANCE) {
            result = result.map((item) => {
              const res: Metric = {
                ...item,
                value: convertDistance(
                  item.value,
                  validUnit.name as validDistanceUnits,
                ),
              };

              return res;
            });
          }

          if (validUnit.metricType.typeName == MetricType.TEMPERATURE) {
            result = result.map((item) => {
              const res: Metric = {
                ...item,
                value: convertTemperature(
                  item.value,
                  validUnit.name as typeValidTemperatureUnits,
                ),
              };

              return res;
            });
          }
        } else {
          throw new BadRequestException('Unit is not valid with metric Type');
        }
      }
    }
    //*** End validate type & unit ***//

    return result;
  }
}
