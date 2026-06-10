const AUTH_TOKEN_KEY = 'muputun.auth.token';
const AUTH_USER_KEY = 'muputun.auth.user';

type StoredUser = {
  id: string;
  email: string;
  displayName: string;
  roles: Array<'customer' | 'admin'>;
};

const isBrowser = () => typeof window !== 'undefined';

export const readAuthToken = () => {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(AUTH_TOKEN_KEY);
};

export const storeAuthToken = (token: string) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const removeAuthToken = () => {
  if (!isBrowser()) return;
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
  window.localStorage.removeItem(AUTH_USER_KEY);
};

export const readStoredUser = (): StoredUser | null => {
  if (!isBrowser()) return null;

  const rawUser = window.localStorage.getItem(AUTH_USER_KEY);
  if (!rawUser) return null;

  try {
    return JSON.parse(rawUser) as StoredUser;
  } catch {
    return null;
  }
};

export const storeAuthUser = (user: StoredUser) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};
