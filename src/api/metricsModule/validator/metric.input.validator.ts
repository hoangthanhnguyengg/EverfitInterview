/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AllMetricDto } from '../dto/request';

@ValidatorConstraint({})
export class MetricValidator implements ValidatorConstraintInterface {
  async validate(
    input?: AllMetricDto,
    _validationArguments?: ValidationArguments,
  ) {
    if (input) {
      console.log('inputinput', input);
      console.log(
        '_validationArguments_validationArguments',
        _validationArguments,
      );

      return false;
    }

    return true;
  }
}
