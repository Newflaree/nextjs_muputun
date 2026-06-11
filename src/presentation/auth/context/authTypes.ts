import type {
  AuthResult,
  LoginCommand,
  RegisterCommand,
} from '../types';
import type { AuthStore } from '../state';

export type AuthContextValue = {
  state: Pick<AuthStore, 'accessToken' | 'lastError' | 'status' | 'user'>;
  isAdmin: boolean;
  login: (command: LoginCommand) => Promise<AuthResult>;
  logout: () => void;
  register: (command: RegisterCommand) => Promise<AuthResult>;
};
