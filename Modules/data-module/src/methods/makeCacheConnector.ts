import { Redis } from 'ioredis';
import { CacheConfig } from '../types';

export function makeCacheConnector(cacheConfig: CacheConfig): Redis {
  return new Redis({
    host: cacheConfig.host,
    port: cacheConfig.port,
    password: cacheConfig.password,
    ...(cacheConfig.useTLS ? { tls: {} } : {})
  });
}
