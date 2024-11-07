import { ServerHTTPSConfig } from './ServerHTTPSConfig';

export interface ServerConfig {
  https: ServerHTTPSConfig | null;
  port: number;
}
