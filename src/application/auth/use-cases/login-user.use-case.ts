import type {
  AuthResultDTO,
} from '../dto/auth-result.dto';
import type { LoginUserDto } from '../dto/login-user.dto';
import {
  AuthTokenPort,
} from '../ports/auth-token.port';
import {
  PublicAuthUserPort,
} from '../ports/public-auth-user.port';
import { AuthResultMapper } from '../mappers/auth-result.mapper';
import {
  EmailAddress,
  PlainPassword,
} from '@/domain/auth';

export class LoginUserUseCase {
  constructor(
    private readonly authUserPort: PublicAuthUserPort,
    private readonly authTokenPort: AuthTokenPort,
    private readonly authResultMapper: AuthResultMapper,
  ) {}

  async execute(command: LoginUserDto): Promise<AuthResultDTO> {
    const user = await this.authUserPort.authenticate({
      email: new EmailAddress(command.email),
      password: new PlainPassword(command.password),
    });
    const accessToken = await this.authTokenPort.issueAccessToken(user);

    return this.authResultMapper.toAuthResultDto(user, accessToken);
  }
}
