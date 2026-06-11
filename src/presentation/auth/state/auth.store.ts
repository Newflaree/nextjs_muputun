import { create } from 'zustand';
import type {
  AccessToken,
  AuthResult,
  AuthUser,
} from '../types';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'anonymous';

type AuthStoreState = {
  accessToken: AccessToken | null;
  lastError: string | null;
  status: AuthStatus;
  user: AuthUser | null;
};

type AuthStoreActions = {
  bootstrap: (payload: { accessToken: AccessToken | null; user: AuthUser | null }) => void;
  fail: (message: string) => void;
  logout: () => void;
  start: () => void;
  succeed: (result: AuthResult) => void;
};

export type AuthStore = AuthStoreState & AuthStoreActions;

export const useAuthStore = create<AuthStore>((set, get) => ({
  accessToken: null,
  lastError: null,
  status: 'idle',
  user: null,

  bootstrap: ({ accessToken, user }) => set({
    accessToken,
    lastError: null,
    status: user ? 'authenticated' : 'anonymous',
    user,
  }),

  fail: (message) => set({
    lastError: message,
    status: get().user ? 'authenticated' : 'anonymous',
  }),

  logout: () => set({
    accessToken: null,
    lastError: null,
    status: 'anonymous',
    user: null,
  }),

  start: () => set({
    lastError: null,
    status: 'loading',
  }),

  succeed: (result) => set({
    accessToken: result.accessToken,
    lastError: null,
    status: 'authenticated',
    user: result.user,
  }),
}));
