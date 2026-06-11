import type {
  AccessTokenDTO,
  AuthResultDTO,
  AuthUserDTO,
} from '../dto/auth-result.dto';
import type { AuthUser } from '@/domain/auth';

export class AuthResultMapper {
  toUserDto(user: AuthUser): AuthUserDTO {
    return {
      displayName: user.displayName,
      email: user.email,
      id: user.id,
      roles: user.roles,
    };
  }

  toAuthResultDto(user: AuthUser, accessToken: AccessTokenDTO): AuthResultDTO {
    return {
      accessToken,
      user: this.toUserDto(user),
    };
  }
}
