import type { DatabaseHealthDto } from '../dto/database-health.dto';
import { DatabaseHealthPort } from '../ports/database-health.port';

export class CheckDatabaseHealthUseCase {
  constructor(private readonly databaseHealthPort: DatabaseHealthPort) {}

  async execute(): Promise<DatabaseHealthDto> {
    const health = await this.databaseHealthPort.check();

    return {
      checkedAt: new Date().toISOString(),
      databaseName: health.databaseName,
      isHealthy: true,
      userName: health.userName,
    };
  }
}
