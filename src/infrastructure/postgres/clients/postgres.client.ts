import {
  Pool,
  type QueryResult,
  type QueryResultRow,
} from 'pg';
import { PostgresConfig } from '../config/postgres.config';

export class PostgresClient {
  private readonly pool: Pool;

  constructor(config: PostgresConfig) {
    this.pool = new Pool({
      connectionString: config.connectionString,
    });
  }

  query<TResult extends QueryResultRow>(
    statement: string,
    values: readonly unknown[] = [],
  ): Promise<QueryResult<TResult>> {
    return this.pool.query<TResult>(statement, [...values]);
  }
}
