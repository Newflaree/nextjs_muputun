import { InvalidDisplayNameError } from '../errors/auth.errors';

const MAX_DISPLAY_NAME_LENGTH = 80;

export class DisplayName {
  readonly value: string;

  constructor(value: string) {
    const displayName = value.trim();

    if (!displayName || displayName.length > MAX_DISPLAY_NAME_LENGTH) {
      throw new InvalidDisplayNameError();
    }

    this.value = displayName;
  }
}
