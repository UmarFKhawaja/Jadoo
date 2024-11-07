import { AuthConfig, CacheConfig, DatabaseConfig } from '@jadoo/data-module';
import { CORSConfig } from './CORSConfig';
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
