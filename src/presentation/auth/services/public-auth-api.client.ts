import type {
  AuthResult,
  LoginCommand,
  RegisterCommand,
  RenewTokenCommand,
} from '../types/auth-session.types';

type ApiSuccessResponse<TData> = {
  ok: true;
  data: TData;
  meta: Record<string, unknown>;
};

type ApiErrorResponse = {
  ok: false;
  code?: string;
  message: string;
  requestId?: string;
};

type ApiResponse<TData> = ApiSuccessResponse<TData> | ApiErrorResponse;

export class PublicAuthApiClient {
  login(command: LoginCommand): Promise<AuthResult> {
    return this.post<AuthResult>('/api/public-auth/login', command);
  }

  register(command: RegisterCommand): Promise<AuthResult> {
    return this.post<AuthResult>('/api/public-auth/register', command);
  }

  renewToken(command: RenewTokenCommand): Promise<AuthResult> {
    return this.post<AuthResult>('/api/public-auth/renew-token', command);
  }

  private async post<TData>(path: string, body: unknown): Promise<TData> {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const payload = await response.json() as ApiResponse<TData>;

    if (!payload.ok) {
      throw new Error(payload.message || 'No fue posible completar la operacion.');
    }

    if (!response.ok) {
      throw new Error('No fue posible completar la operacion.');
    }

    return payload.data;
  }
}
