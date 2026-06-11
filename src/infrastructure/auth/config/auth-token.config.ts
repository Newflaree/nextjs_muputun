const ONE_HOUR_IN_MS = 60 * 60 * 1000;

type AuthTokenConfigProps = {
  secret: string;
  ttlMs: number;
};

export class AuthTokenConfig {
  readonly secret: string;

  readonly ttlMs: number;

  constructor(props: AuthTokenConfigProps) {
    this.secret = props.secret;
    this.ttlMs = props.ttlMs;
  }

  static fromEnvironment(): AuthTokenConfig {
    const secret = process.env.ADMIN_JWT_SECRET;

    if (secret) {
      return new AuthTokenConfig({
        secret,
        ttlMs: ONE_HOUR_IN_MS,
      });
    }

    if (process.env.NODE_ENV === 'production') {
      throw new Error('ADMIN_JWT_SECRET is required to issue auth tokens.');
    }

    return new AuthTokenConfig({
      secret: 'muputun-dev-auth-secret',
      ttlMs: ONE_HOUR_IN_MS,
    });
  }
}
