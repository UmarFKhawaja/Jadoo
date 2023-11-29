import { GRPC } from '@cerbos/grpc';
import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { entities } from '../entities';
import { migrations } from '../migrations';
import { Config } from '../types';

const config: Config = Config.instance;

export const DATA_SOURCE: DataSource = new DataSource({
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

export const CACHE: Redis = new Redis({
  host: config.cache.host,
  port: config.cache.port,
  password: config.cache.password,
  ...(config.cache.useTLS ? { tls: {} } : {})
});

export const AUTH: GRPC = new GRPC(`${config.auth.host}:${config.auth.ports.grpc}`, {
  tls: config.auth.useTLS
});
