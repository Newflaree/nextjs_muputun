import {
  type ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import type {
  AuthResultDTO,
  LoginCommand,
} from '@/application';
import {
  readAuthToken,
  readStoredUser,
  removeAuthToken,
  storeAuthToken,
  storeAuthUser,
} from '@/infrastructure';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import type { AuthState } from './authTypes';

const TOKEN_TTL_MS = 60 * 60 * 1000;

const initialAuthState: AuthState = {
  accessToken: null,
  lastError: null,
  status: 'idle',
  user: null,
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const token = readAuthToken();
    const user = readStoredUser();

    dispatch({
      type: 'AUTH_BOOTSTRAP',
      payload: {
        accessToken: token ? { token, expiresAt: Date.now() + TOKEN_TTL_MS } : null,
        user,
      },
    });
  }, []);

  const login = async ({ email }: LoginCommand): Promise<AuthResultDTO> => {
    dispatch({ type: 'AUTH_START' });

    const user = {
      id: 'local-admin',
      email: email || 'demo@muputun.cl',
      displayName: (email || 'demo@muputun.cl').split('@')[0] || 'Administrador',
      roles: ['admin' as const],
    };
    const accessToken = {
      token: `local-admin-${Date.now()}`,
      expiresAt: Date.now() + TOKEN_TTL_MS,
    };
    const result: AuthResultDTO = { accessToken, user };

    storeAuthToken(accessToken.token);
    storeAuthUser(user);
    dispatch({ type: 'AUTH_SUCCESS', payload: result });

    return result;
  };

  const logout = () => {
    removeAuthToken();
    dispatch({ type: 'AUTH_LOGOUT' });
  };

  const value = useMemo(
    () => ({
      state,
      isAdmin: state.user?.roles.includes('admin') ?? false,
      login,
      logout,
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  );
};
