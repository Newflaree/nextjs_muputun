import { CheckDatabaseHealthUseCase } from '@/application/health';
import { PostgresDatabaseHealthAdapter } from '../adapters/postgres-database-health.adapter';
import { PostgresClient } from '../clients/postgres.client';
import { PostgresConfig } from '../config/postgres.config';

export class DatabaseHealthCompositionRoot {
  private readonly postgresClient = new PostgresClient(PostgresConfig.fromEnvironment());

  private readonly databaseHealthPort = new PostgresDatabaseHealthAdapter(this.postgresClient);

  createCheckDatabaseHealthUseCase(): CheckDatabaseHealthUseCase {
    return new CheckDatabaseHealthUseCase(this.databaseHealthPort);
  }
}
