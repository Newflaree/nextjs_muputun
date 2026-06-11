export type UserRole = 'customer' | 'admin';

export type AuthUser = {
  id: string;
  email: string;
  displayName: string;
  roles: UserRole[];
};

export type AccessToken = {
  token: string;
  expiresAt: number;
};

export type AuthResult = {
  user: AuthUser;
  accessToken: AccessToken;
};

export type LoginCommand = {
  email: string;
  password: string;
};

export type RegisterCommand = {
  displayName: string;
  email: string;
  password: string;
};

export type RenewTokenCommand = {
  token: string;
};
