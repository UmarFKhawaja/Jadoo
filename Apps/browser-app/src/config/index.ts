import { Config, ServerConfig } from '../types';

export const config: Config = {
  server: parseServerConfig()
};

function parseServerConfig(): ServerConfig {
  const server: ServerConfig = {
    url: import.meta.env.SERVER_URL || ''
  };

  return server;
}
