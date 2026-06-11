import { InvalidEmailAddressError } from '../errors/auth.errors';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class EmailAddress {
  readonly value: string;

  constructor(value: string) {
    const email = value.trim().toLowerCase();

    if (!EMAIL_PATTERN.test(email)) {
      throw new InvalidEmailAddressError();
    }

    this.value = email;
  }
}
