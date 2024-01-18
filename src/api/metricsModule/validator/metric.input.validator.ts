/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AllMetricDto } from '../dto/request';
import { User } from 'src/database/entities/user.entity';

@ValidatorConstraint({})
export class UserValidator implements ValidatorConstraintInterface {
  async validate(input?: number, _validationArguments?: ValidationArguments) {
    if (input) {
      // check user is exist
      const user = await User.findOne(input);
      if (user) {
        return true;
      }
      return false;
    }

    return false;
  }
}
