import {
  AuthResultMapper,
  LoginUserUseCase,
  RegisterUserUseCase,
  RenewAuthTokenUseCase,
} from '@/application/auth';
import {
  PostgresClient,
  PostgresConfig,
} from '@/infrastructure/postgres';
import { JwtAuthTokenAdapter } from '../adapters/jwt-auth-token.adapter';
import { PostgresPublicAuthUserAdapter } from '../adapters/postgres-public-auth-user.adapter';
import { AuthTokenConfig } from '../config/auth-token.config';
import { PasswordHasherService } from '../security/password-hasher.service';

export class PublicAuthCompositionRoot {
  private readonly authResultMapper = new AuthResultMapper();

  private readonly passwordHasher = new PasswordHasherService();

  private readonly postgresClient = new PostgresClient(PostgresConfig.fromEnvironment());

  private readonly authTokenPort = new JwtAuthTokenAdapter(AuthTokenConfig.fromEnvironment());

  private readonly authUserPort = new PostgresPublicAuthUserAdapter(
    this.postgresClient,
    this.passwordHasher,
  );

  createLoginUserUseCase(): LoginUserUseCase {
    return new LoginUserUseCase(
      this.authUserPort,
      this.authTokenPort,
      this.authResultMapper,
    );
  }

  createRegisterUserUseCase(): RegisterUserUseCase {
    return new RegisterUserUseCase(
      this.authUserPort,
      this.authTokenPort,
      this.authResultMapper,
    );
  }

  createRenewAuthTokenUseCase(): RenewAuthTokenUseCase {
    return new RenewAuthTokenUseCase(
      this.authTokenPort,
      this.authResultMapper,
    );
  }
}
