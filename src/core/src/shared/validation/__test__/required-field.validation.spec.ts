import { describe, expect, it } from 'vitest';
import { RequiredFieldError } from '../../error';
import { RequiredFieldValidation } from '../required-field.validation';

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field');
};

describe('RequiredFieldValidation', () => {
  it('should return a RequiredFieldError if validation fails', () => {
    const sut = makeSut();
    const error = sut.validate({ other_field: 'field' });

    expect(error).toEqual(new RequiredFieldError('field'));
  });

  it('should not return if validation succeds', () => {
    const sut = makeSut();
    const error = sut.validate({ field: 'any_field' });
    expect(error).toBeFalsy();
  });
});
