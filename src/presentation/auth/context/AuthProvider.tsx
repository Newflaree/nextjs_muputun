import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { AuthContext } from './AuthContext';
import {
  AuthSessionStorageService,
  PublicAuthApiClient,
} from '../services';
import { useAuthStore } from '../state';
import type {
  AuthResult,
  LoginCommand,
  RegisterCommand,
} from '../types';

type AuthProviderProps = {
  children: ReactNode;
};

const authApiClient = new PublicAuthApiClient();
const authSessionStorage = new AuthSessionStorageService();

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const accessToken = useAuthStore((store) => store.accessToken);
  const bootstrap = useAuthStore((store) => store.bootstrap);
  const fail = useAuthStore((store) => store.fail);
  const lastError = useAuthStore((store) => store.lastError);
  const logoutFromStore = useAuthStore((store) => store.logout);
  const start = useAuthStore((store) => store.start);
  const status = useAuthStore((store) => store.status);
  const succeed = useAuthStore((store) => store.succeed);
  const user = useAuthStore((store) => store.user);

  useEffect(() => {
    const storedAccessToken = authSessionStorage.readAccessToken();
    const storedUser = authSessionStorage.readUser();

    bootstrap({
      accessToken: storedAccessToken,
      user: storedUser,
    });

    if (!storedAccessToken) return;

    authApiClient
      .renewToken({ token: storedAccessToken.token })
      .then((result) => {
        authSessionStorage.store(result);
        succeed(result);
      })
      .catch(() => {
        authSessionStorage.clear();
        logoutFromStore();
      });
  }, [bootstrap, logoutFromStore, succeed]);

  const login = useCallback(async (command: LoginCommand): Promise<AuthResult> => {
    start();

    try {
      const result = await authApiClient.login(command);

      authSessionStorage.store(result);
      succeed(result);

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'No fue posible iniciar sesion.';

      fail(message);

      throw error;
    }
  }, [fail, start, succeed]);

  const register = useCallback(async (command: RegisterCommand): Promise<AuthResult> => {
    start();

    try {
      const result = await authApiClient.register(command);

      authSessionStorage.store(result);
      succeed(result);

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'No fue posible crear la cuenta.';

      fail(message);

      throw error;
    }
  }, [fail, start, succeed]);

  const logout = useCallback(() => {
    authSessionStorage.clear();
    logoutFromStore();
  }, [logoutFromStore]);

  const value = useMemo(
    () => ({
      state: {
        accessToken,
        lastError,
        status,
        user,
      },
      isAdmin: user?.roles.includes('admin') ?? false,
      login,
      logout,
      register,
    }),
    [accessToken, lastError, login, logout, register, status, user],
  );

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  );
};
