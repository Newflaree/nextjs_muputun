import {
  AuthUser,
  InvalidCredentialsError,
} from '@/domain/auth';
import type {
  AuthenticateUserInput,
  RegisterUserInput,
} from '@/application/auth';
import { PublicAuthUserPort } from '@/application/auth';

export class MockPublicAuthUserAdapter extends PublicAuthUserPort {
  async authenticate({ email, password }: AuthenticateUserInput): Promise<AuthUser> {
    if (!password.value) {
      throw new InvalidCredentialsError();
    }

    const isAdmin = email.value.endsWith('@muputun.cl');

    return new AuthUser({
      displayName: MockPublicAuthUserAdapter.getDisplayNameFromEmail(email.value),
      email: email.value,
      id: MockPublicAuthUserAdapter.createStableUserId(email.value),
      roles: [isAdmin ? 'admin' : 'customer'],
    });
  }

  async register({ displayName, email }: RegisterUserInput): Promise<AuthUser> {
    return new AuthUser({
      displayName: displayName.value,
      email: email.value,
      id: MockPublicAuthUserAdapter.createStableUserId(email.value),
      roles: ['customer'],
    });
  }

  private static createStableUserId(email: string): string {
    return `mock-user-${Buffer.from(email).toString('base64url')}`;
  }

  private static getDisplayNameFromEmail(email: string): string {
    return email.split('@')[0] || 'Usuario';
  }
}
