export type DatabaseHealthResult = {
  databaseName: string;
  userName: string;
};

export abstract class DatabaseHealthPort {
  abstract check(): Promise<DatabaseHealthResult>;
}
