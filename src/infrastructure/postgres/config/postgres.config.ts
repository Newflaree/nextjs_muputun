export class PostgresConfig {
  readonly connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  static fromEnvironment(): PostgresConfig {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL is required to connect to Postgres.');
    }

    return new PostgresConfig(connectionString);
  }
}
