import {
  AuthEmailAlreadyRegisteredError,
  AuthUser,
  InvalidCredentialsError,
  type AuthUserRole,
} from '@/domain/auth';
import type {
  AuthenticateUserInput,
  RegisterUserInput,
} from '@/application/auth';
import { PublicAuthUserPort } from '@/application/auth';
import { PostgresClient } from '@/infrastructure/postgres';
import { PasswordHasherService } from '../security/password-hasher.service';

type PublicAuthUserRow = {
  display_name: string;
  email: string;
  id: string;
  password_hash: string;
  roles: AuthUserRole[];
};

export class PostgresPublicAuthUserAdapter extends PublicAuthUserPort {
  constructor(
    private readonly postgresClient: PostgresClient,
    private readonly passwordHasher: PasswordHasherService,
  ) {
    super();
  }

  async authenticate({ email, password }: AuthenticateUserInput): Promise<AuthUser> {
    const result = await this.postgresClient.query<PublicAuthUserRow>(
      `
        SELECT id, email, display_name, password_hash, roles
        FROM public_auth_users
        WHERE email = $1
        LIMIT 1
      `,
      [email.value],
    );
    const [row] = result.rows;

    if (!row || !this.passwordHasher.verify(password.value, row.password_hash)) {
      throw new InvalidCredentialsError();
    }

    return PostgresPublicAuthUserAdapter.toDomain(row);
  }

  async register({ displayName, email, password }: RegisterUserInput): Promise<AuthUser> {
    try {
      const result = await this.postgresClient.query<PublicAuthUserRow>(
        `
          INSERT INTO public_auth_users (email, display_name, password_hash, roles)
          VALUES ($1, $2, $3, $4)
          RETURNING id, email, display_name, password_hash, roles
        `,
        [
          email.value,
          displayName.value,
          this.passwordHasher.hash(password.value),
          ['customer'],
        ],
      );
      const [row] = result.rows;

      if (!row) {
        throw new Error('Public auth user was not persisted.');
      }

      return PostgresPublicAuthUserAdapter.toDomain(row);
    } catch (error) {
      if (PostgresPublicAuthUserAdapter.isUniqueViolation(error)) {
        throw new AuthEmailAlreadyRegisteredError();
      }

      throw error;
    }
  }

  private static toDomain(row: PublicAuthUserRow): AuthUser {
    return new AuthUser({
      displayName: row.display_name,
      email: row.email,
      id: row.id,
      roles: row.roles,
    });
  }

  private static isUniqueViolation(error: unknown): boolean {
    return (
      typeof error === 'object'
      && error !== null
      && 'code' in error
      && error.code === '23505'
    );
  }
}
