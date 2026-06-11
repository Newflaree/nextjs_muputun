import crypto from 'crypto';
import {
  AuthToken,
  AuthUser,
  InvalidAuthTokenError,
} from '@/domain/auth';
import type {
  AccessTokenDTO,
} from '@/application/auth';
import { AuthTokenPort } from '@/application/auth';
import { AuthTokenConfig } from '../config/auth-token.config';

type JwtHeader = {
  alg: 'HS256';
  typ: 'JWT';
};

type JwtPayload = {
  displayName: string;
  email: string;
  exp: number;
  iat: number;
  sub: string;
  roles: AuthUser['roles'];
};

export class JwtAuthTokenAdapter extends AuthTokenPort {
  private static readonly header: JwtHeader = {
    alg: 'HS256',
    typ: 'JWT',
  };

  constructor(private readonly config: AuthTokenConfig) {
    super();
  }

  async issueAccessToken(user: AuthUser): Promise<AccessTokenDTO> {
    const issuedAt = Math.floor(Date.now() / 1000);
    const expiresAt = Date.now() + this.config.ttlMs;
    const payload: JwtPayload = {
      displayName: user.displayName,
      email: user.email,
      exp: Math.floor(expiresAt / 1000),
      iat: issuedAt,
      roles: user.roles,
      sub: user.id,
    };

    return {
      expiresAt,
      token: this.sign(payload),
    };
  }

  async verifyAccessToken(token: AuthToken): Promise<AuthUser> {
    const payload = this.verify(token.value);

    return new AuthUser({
      displayName: payload.displayName,
      email: payload.email,
      id: payload.sub,
      roles: payload.roles,
    });
  }

  private sign(payload: JwtPayload): string {
    const encodedHeader = JwtAuthTokenAdapter.encodeJson(JwtAuthTokenAdapter.header);
    const encodedPayload = JwtAuthTokenAdapter.encodeJson(payload);
    const unsignedToken = `${ encodedHeader }.${ encodedPayload }`;
    const signature = this.signUnsignedToken(unsignedToken);

    return `${ unsignedToken }.${ signature }`;
  }

  private verify(token: string): JwtPayload {
    const [encodedHeader, encodedPayload, signature] = token.split('.');

    if (!encodedHeader || !encodedPayload || !signature) {
      throw new InvalidAuthTokenError();
    }

    const unsignedToken = `${ encodedHeader }.${ encodedPayload }`;

    if (!this.hasValidSignature(unsignedToken, signature)) {
      throw new InvalidAuthTokenError();
    }

    const header = JwtAuthTokenAdapter.decodeJson<JwtHeader>(encodedHeader);
    const payload = JwtAuthTokenAdapter.decodeJson<JwtPayload>(encodedPayload);

    if (header.alg !== 'HS256' || header.typ !== 'JWT') {
      throw new InvalidAuthTokenError();
    }

    if (!JwtAuthTokenAdapter.isValidPayload(payload)) {
      throw new InvalidAuthTokenError();
    }

    if (payload.exp <= Math.floor(Date.now() / 1000)) {
      throw new InvalidAuthTokenError();
    }

    return payload;
  }

  private hasValidSignature(unsignedToken: string, signature: string): boolean {
    const expectedSignature = this.signUnsignedToken(unsignedToken);
    const expectedBuffer = Buffer.from(expectedSignature);
    const signatureBuffer = Buffer.from(signature);

    return (
      expectedBuffer.length === signatureBuffer.length
      && crypto.timingSafeEqual(expectedBuffer, signatureBuffer)
    );
  }

  private signUnsignedToken(unsignedToken: string): string {
    return crypto
      .createHmac('sha256', this.config.secret)
      .update(unsignedToken)
      .digest('base64url');
  }

  private static encodeJson(value: JwtHeader | JwtPayload): string {
    return Buffer.from(JSON.stringify(value)).toString('base64url');
  }

  private static decodeJson<TValue>(value: string): TValue {
    try {
      return JSON.parse(Buffer.from(value, 'base64url').toString('utf8')) as TValue;
    } catch {
      throw new InvalidAuthTokenError();
    }
  }

  private static isValidPayload(payload: JwtPayload): boolean {
    return (
      typeof payload.displayName === 'string'
      && typeof payload.email === 'string'
      && typeof payload.exp === 'number'
      && typeof payload.iat === 'number'
      && typeof payload.sub === 'string'
      && Array.isArray(payload.roles)
      && payload.roles.every((role) => role === 'admin' || role === 'customer')
    );
  }
}
