import { InvalidAuthInputError } from '@/domain/auth';

type RenewAuthTokenDtoProps = {
  token: string;
};

export class RenewAuthTokenDto {
  readonly token: string;

  constructor(props: RenewAuthTokenDtoProps) {
    this.token = props.token;
  }

  static fromUnknown(input: unknown): RenewAuthTokenDto {
    if (!input || typeof input !== 'object') {
      throw new InvalidAuthInputError('El body debe ser un objeto JSON.');
    }

    const body = input as Record<string, unknown>;

    if (typeof body.token !== 'string') {
      throw new InvalidAuthInputError('El token es requerido.');
    }

    return new RenewAuthTokenDto({
      token: body.token,
    });
  }
}
