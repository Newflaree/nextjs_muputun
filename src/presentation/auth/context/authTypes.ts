import type {
  AccessTokenDTO,
  AuthResultDTO,
  AuthUserDTO,
  LoginCommand,
} from '@/application';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'anonymous';

export type AuthState = {
  accessToken: AccessTokenDTO | null;
  lastError: string | null;
  status: AuthStatus;
  user: AuthUserDTO | null;
};

export type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_BOOTSTRAP'; payload: { accessToken: AccessTokenDTO | null; user: AuthUserDTO | null } }
  | { type: 'AUTH_SUCCESS'; payload: AuthResultDTO }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'AUTH_ERROR'; payload: string };

export type AuthContextValue = {
  state: AuthState;
  isAdmin: boolean;
  login: (command: LoginCommand) => Promise<AuthResultDTO>;
  logout: () => void;
};
