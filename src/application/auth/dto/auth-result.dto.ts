export type UserRole = 'customer' | 'admin';

export type AuthUserDTO = {
  id: string;
  email: string;
  displayName: string;
  roles: UserRole[];
};

export type AccessTokenDTO = {
  token: string;
  expiresAt: number;
};

export type AuthResultDTO = {
  user: AuthUserDTO;
  accessToken: AccessTokenDTO;
};

