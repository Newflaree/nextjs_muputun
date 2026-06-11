import { InvalidPasswordError } from '../errors/auth.errors';

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 128;

export class PlainPassword {
  readonly value: string;

  constructor(value: string) {
    if (value.length < MIN_PASSWORD_LENGTH || value.length > MAX_PASSWORD_LENGTH) {
      throw new InvalidPasswordError();
    }

    this.value = value;
  }
}
