import {
  DatabaseHealthPort,
  type DatabaseHealthResult,
} from '@/application/health';
import { PostgresClient } from '../clients/postgres.client';

type DatabaseHealthRow = {
  database_name: string;
  user_name: string;
};

export class PostgresDatabaseHealthAdapter extends DatabaseHealthPort {
  constructor(private readonly postgresClient: PostgresClient) {
    super();
  }

  async check(): Promise<DatabaseHealthResult> {
    const result = await this.postgresClient.query<DatabaseHealthRow>(
      'select current_database() as database_name, current_user as user_name',
    );
    const [row] = result.rows;

    if (!row) {
      throw new Error('Postgres health query returned no rows.');
    }

    return {
      databaseName: row.database_name,
      userName: row.user_name,
    };
  }
}
