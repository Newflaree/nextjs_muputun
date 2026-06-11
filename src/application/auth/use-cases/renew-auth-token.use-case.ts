import type {
  AuthResultDTO,
} from '../dto/auth-result.dto';
import type { RenewAuthTokenDto } from '../dto/renew-auth-token.dto';
import { AuthTokenPort } from '../ports/auth-token.port';
import { AuthResultMapper } from '../mappers/auth-result.mapper';
import { AuthToken } from '@/domain/auth';

export class RenewAuthTokenUseCase {
  constructor(
    private readonly authTokenPort: AuthTokenPort,
    private readonly authResultMapper: AuthResultMapper,
  ) {}

  async execute(command: RenewAuthTokenDto): Promise<AuthResultDTO> {
    const user = await this.authTokenPort.verifyAccessToken(new AuthToken(command.token));
    const accessToken = await this.authTokenPort.issueAccessToken(user);

    return this.authResultMapper.toAuthResultDto(user, accessToken);
  }
}
