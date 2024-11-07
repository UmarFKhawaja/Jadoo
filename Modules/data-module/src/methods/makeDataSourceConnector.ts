import { DataSource } from 'typeorm';
import { entities } from '../entities';
import { migrations } from '../migrations';
import { DatabaseConfig } from '../types';

export function makeDataSourceConnector(databaseConfig: DatabaseConfig): DataSource {
  return new DataSource({
    type: 'mysql',
    host: databaseConfig.host,
    port: databaseConfig.port,
    username: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.database,
    synchronize: false,
    logging: false,
    entities,
    migrations,
    subscribers: [],
    migrationsTableName: 'migration'
  });
}
