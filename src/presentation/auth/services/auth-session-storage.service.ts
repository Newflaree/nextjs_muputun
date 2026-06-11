import type {
  AccessToken,
  AuthUser,
} from '../types/auth-session.types';

const AUTH_TOKEN_KEY = 'muputun:auth-token';
const AUTH_TOKEN_EXPIRES_AT_KEY = 'muputun:auth-token-expires-at';
const AUTH_USER_KEY = 'muputun:auth-user';

export class AuthSessionStorageService {
  readAccessToken(): AccessToken | null {
    if (!this.canUseStorage()) return null;

    const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
    const expiresAt = Number(window.localStorage.getItem(AUTH_TOKEN_EXPIRES_AT_KEY));

    if (!token || !expiresAt || expiresAt <= Date.now()) {
      this.clear();

      return null;
    }

    return {
      expiresAt,
      token,
    };
  }

  readUser(): AuthUser | null {
    if (!this.canUseStorage()) return null;

    const rawUser = window.localStorage.getItem(AUTH_USER_KEY);

    if (!rawUser) return null;

    try {
      return JSON.parse(rawUser) as AuthUser;
    } catch {
      this.clear();

      return null;
    }
  }

  store(result: { accessToken: AccessToken; user: AuthUser }): void {
    if (!this.canUseStorage()) return;

    window.localStorage.setItem(AUTH_TOKEN_KEY, result.accessToken.token);
    window.localStorage.setItem(AUTH_TOKEN_EXPIRES_AT_KEY, String(result.accessToken.expiresAt));
    window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(result.user));
  }

  clear(): void {
    if (!this.canUseStorage()) return;

    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(AUTH_TOKEN_EXPIRES_AT_KEY);
    window.localStorage.removeItem(AUTH_USER_KEY);
  }

  private canUseStorage(): boolean {
    return typeof window !== 'undefined' && Boolean(window.localStorage);
  }
}
