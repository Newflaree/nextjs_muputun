import { InvalidAuthTokenError } from '../errors/auth.errors';

export class AuthToken {
  readonly value: string;

  constructor(value: string) {
    const token = value.trim();

    if (!token) {
      throw new InvalidAuthTokenError();
    }

    this.value = token;
  }
}
