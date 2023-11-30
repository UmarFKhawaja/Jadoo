import { Redis } from 'ioredis';
import { Config } from '../types';

export function makeCacheConnector(config: Config): Redis {
  return new Redis({
    host: config.cache.host,
    port: config.cache.port,
    password: config.cache.password,
    ...(config.cache.useTLS ? { tls: {} } : {})
  });
}
