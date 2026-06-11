import { InvalidAuthInputError } from '@/domain/auth';

type RegisterUserDtoProps = {
  displayName: string;
  email: string;
  password: string;
};

export class RegisterUserDto {
  readonly displayName: string;

  readonly email: string;

  readonly password: string;

  constructor(props: RegisterUserDtoProps) {
    this.displayName = props.displayName;
    this.email = props.email;
    this.password = props.password;
  }

  static fromUnknown(input: unknown): RegisterUserDto {
    if (!input || typeof input !== 'object') {
      throw new InvalidAuthInputError('El body debe ser un objeto JSON.');
    }

    const body = input as Record<string, unknown>;

    if (
      typeof body.displayName !== 'string'
      || typeof body.email !== 'string'
      || typeof body.password !== 'string'
    ) {
      throw new InvalidAuthInputError('DisplayName, email y password son requeridos.');
    }

    return new RegisterUserDto({
      displayName: body.displayName,
      email: body.email,
      password: body.password,
    });
  }
}
