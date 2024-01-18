/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MetricType } from 'src/database/entities/metricType.entity';
import { User } from 'src/database/entities/user.entity';

@ValidatorConstraint({})
export class MetricTypeValidator implements ValidatorConstraintInterface {
  async validate(input?: number, _validationArguments?: ValidationArguments) {
    if (input) {
      // check type is valid
      const metricType = await MetricType.findOne(input);
      if (metricType) {
        return true;
      }

      return false;
    }

    return true;
  }
}
