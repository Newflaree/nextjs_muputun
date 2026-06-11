import type {
  AuthUser,
  DisplayName,
  EmailAddress,
  PlainPassword,
} from '@/domain/auth';

export type AuthenticateUserInput = {
  email: EmailAddress;
  password: PlainPassword;
};

export type RegisterUserInput = {
  displayName: DisplayName;
  email: EmailAddress;
  password: PlainPassword;
};

export abstract class PublicAuthUserPort {
  abstract authenticate(input: AuthenticateUserInput): Promise<AuthUser>;

  abstract register(input: RegisterUserInput): Promise<AuthUser>;
}
