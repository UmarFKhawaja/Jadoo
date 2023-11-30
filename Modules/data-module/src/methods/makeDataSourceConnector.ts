import { DataSource } from 'typeorm';
import { entities } from '../entities';
import { migrations } from '../migrations';
import { Config } from '../types';

export function makeDataSourceConnector(config: Config): DataSource {
  return new DataSource({
    type: 'mysql',
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    synchronize: false,
    logging: false,
    entities,
    migrations,
    subscribers: [],
    migrationsTableName: 'migration'
  });
}
