import { parseAuthConfig, parseCacheConfig, parseDatabaseConfig } from '../methods';
import { AuthConfig, CacheConfig, DatabaseConfig } from '../types';

export const AUTH_CONFIG: AuthConfig = parseAuthConfig();

export const CACHE_CONFIG: CacheConfig = parseCacheConfig();

export const DATABASE_CONFIG: DatabaseConfig = parseDatabaseConfig();
