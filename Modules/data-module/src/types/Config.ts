import { AuthConfig } from './AuthConfig';
import { CacheConfig } from './CacheConfig';
import { CORSConfig } from './CORSConfig';
import { DatabaseConfig } from './DatabaseConfig';
import { ServerConfig } from './ServerConfig';
import { SessionConfig } from './SessionConfig';

export interface Config {
  server: ServerConfig;
  cors: CORSConfig;
  session: SessionConfig;
  database: DatabaseConfig;
  cache: CacheConfig;
  auth: AuthConfig;
}
