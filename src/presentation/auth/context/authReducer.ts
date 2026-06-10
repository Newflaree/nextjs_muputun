import type { AuthAction, AuthState } from './authTypes';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        lastError: null,
        status: 'loading',
      };

    case 'AUTH_BOOTSTRAP':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        lastError: null,
        status: action.payload.user ? 'authenticated' : 'anonymous',
        user: action.payload.user,
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        lastError: null,
        status: 'authenticated',
        user: action.payload.user,
      };

    case 'AUTH_LOGOUT':
      return {
        ...state,
        accessToken: null,
        lastError: null,
        status: 'anonymous',
        user: null,
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        lastError: action.payload,
        status: state.user ? 'authenticated' : 'anonymous',
      };

    default:
      return state;
  }
};
