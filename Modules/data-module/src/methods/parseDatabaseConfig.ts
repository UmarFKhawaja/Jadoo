import { parseNumber, parseString } from '@jadoo/core-module';
import { DatabaseConfig } from '../types';

export function parseDatabaseConfig(): DatabaseConfig {
  const database: DatabaseConfig = {
    host: parseString('DATABASE_HOST', 'localhost'),
    port: parseNumber('DATABASE_PORT', 3306),
    username: parseString('DATABASE_USERNAME', 'jadoo'),
    password: parseString('DATABASE_PASSWORD', 'Jadoo123'),
    database: parseString('DATABASE_DATABASE', 'jadoo')
  };

  return database;
}
