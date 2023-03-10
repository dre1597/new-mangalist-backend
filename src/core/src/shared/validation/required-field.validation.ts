import { RequiredFieldError } from '../error';
import { Validation } from './validation';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new RequiredFieldError(this.fieldName);
    }
  }
}
