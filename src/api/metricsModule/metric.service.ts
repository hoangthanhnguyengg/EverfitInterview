import { BadRequestException, Injectable } from '@nestjs/common';
import { MetricRepository } from './metric.repository';
import { AllMetricDto, CreateMetricDto } from './dto/request';
import {
  MetricType,
  typeValidTemperatureUnits,
  validDistanceUnits,
} from 'src/common/constants';
import {
  convertDistanceFromCentimeters,
  convertDistanceToCentimeters,
  convertTemperatureFromCelsius,
  convertTemperatureToCelsius,
} from 'src/common/utils/caculation';
import { MetricResponse } from './dto/response';

@Injectable()
export class MetricService {
  constructor(private repository: MetricRepository) {}

  async getAll(input: AllMetricDto): Promise<MetricResponse[]> {
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
        //*** Check unit is valid and convert to required unit***//
        const validUnit = units.find((item) => item.id === Number(input.unit));

        if (validUnit) {
          if (validUnit.metricType.typeName == MetricType.DISTANCE) {
            result = result.map((item) => {
              const res = {
                ...item,
                value: convertDistanceFromCentimeters(
                  item.value,
                  validUnit.name as validDistanceUnits,
                ),
              };

              return res;
            });
          }

          if (validUnit.metricType.typeName == MetricType.TEMPERATURE) {
            result = result.map((item) => {
              const res = {
                ...item,
                value: convertTemperatureFromCelsius(
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

  async createOne(input: CreateMetricDto) {
    let convertUnitValue = input;
    if (input.type) {
      const units = await this.repository.getMetricTypeAndUnit(input.type);

      if (input.unit) {
        //*** Check unit is valid and convert to centimeters***//
        const validUnit = units.find((item) => item.id === Number(input.unit));

        if (validUnit) {
          if (validUnit.metricType.typeName == MetricType.TEMPERATURE) {
            convertUnitValue = {
              ...convertUnitValue,
              value: convertTemperatureToCelsius(
                convertUnitValue.value,
                validUnit.name as typeValidTemperatureUnits,
              ),
            };
          }

          if (validUnit.metricType.typeName == MetricType.DISTANCE) {
            convertUnitValue = {
              ...convertUnitValue,
              value: convertDistanceToCentimeters(
                convertUnitValue.value,
                validUnit.name as validDistanceUnits,
              ),
            };
          }
        } else {
          throw new BadRequestException('Unit is not valid with metric Type');
        }
      }
    }

    return await this.repository.createOne(convertUnitValue);
  }
}
