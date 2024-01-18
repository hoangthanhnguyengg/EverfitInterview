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
    console.log('input', input);
    if (input) {
      // check user is exist
      const user = await User.findOneById(input);
      if (user) {
        return true;
      }
      return false;
    }

    return false;
  }
}
