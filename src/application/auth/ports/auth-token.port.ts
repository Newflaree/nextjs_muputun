import type {
  AccessTokenDTO,
} from '../dto/auth-result.dto';
import type {
  AuthToken,
  AuthUser,
} from '@/domain/auth';

export abstract class AuthTokenPort {
  abstract issueAccessToken(user: AuthUser): Promise<AccessTokenDTO>;

  abstract verifyAccessToken(token: AuthToken): Promise<AuthUser>;
}
