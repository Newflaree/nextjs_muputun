import { InvalidAuthInputError } from '@/domain/auth';

type LoginUserDtoProps = {
  email: string;
  password: string;
};

export class LoginUserDto {
  readonly email: string;

  readonly password: string;

  constructor(props: LoginUserDtoProps) {
    this.email = props.email;
    this.password = props.password;
  }

  static fromUnknown(input: unknown): LoginUserDto {
    if (!input || typeof input !== 'object') {
      throw new InvalidAuthInputError('El body debe ser un objeto JSON.');
    }

    const body = input as Record<string, unknown>;

    if (typeof body.email !== 'string' || typeof body.password !== 'string') {
      throw new InvalidAuthInputError('Email y password son requeridos.');
    }

    return new LoginUserDto({
      email: body.email,
      password: body.password,
    });
  }
}
