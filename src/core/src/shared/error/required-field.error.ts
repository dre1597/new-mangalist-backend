export class RequiredFieldError extends Error {
  constructor(param: string) {
    super(`The field ${param}`);
    this.name = 'RequiredFieldError';
  }
}
