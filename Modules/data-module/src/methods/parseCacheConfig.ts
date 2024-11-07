import { parseBoolean, parseNumber, parseString } from '@jadoo/core-module';
import { CacheConfig } from '../types';

export function parseCacheConfig(): CacheConfig {
  const cache: CacheConfig = {
    host: parseString('CACHE_HOST', 'localhost'),
    port: parseNumber('CACHE_PORT', 6379),
    password: parseString('CACHE_PASSWORD', ''),
    useTLS: parseBoolean('CACHE_USE_TLS', false)
  };

  return cache;
}


