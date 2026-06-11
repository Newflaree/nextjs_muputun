import {
  InvalidAuthInputError,
  InvalidAuthTokenError,
  InvalidCredentialsError,
} from '@/domain/auth';

export type ApiErrorResponse = {
  code: string;
  message: string;
  statusCode: number;
};

export class ApiErrorMapper {
  map(error: unknown): ApiErrorResponse {
    if (error instanceof InvalidAuthInputError) {
      return {
        code: 'AUTH_INPUT_INVALID',
        message: error.message,
        statusCode: 400,
      };
    }

    if (error instanceof InvalidCredentialsError) {
      return {
        code: 'AUTH_CREDENTIALS_INVALID',
        message: 'Correo o contraseña inválidos.',
        statusCode: 401,
      };
    }

    if (error instanceof InvalidAuthTokenError) {
      return {
        code: 'AUTH_TOKEN_INVALID',
        message: 'La sesión no es válida o expiró.',
        statusCode: 401,
      };
    }

    return {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'No fue posible completar la operación.',
      statusCode: 500,
    };
  }
}
