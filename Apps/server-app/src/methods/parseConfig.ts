import { readFileSync as readFile } from 'fs';
import { parseNumber, parseString } from '@jadoo/core-module';
import { parseAuthConfig, parseCacheConfig, parseDatabaseConfig } from '@jadoo/data-module';
import { Config, CORSConfig, ServerConfig, ServerHTTPSConfig, SessionConfig } from '../types';

export function parseConfig(): Config {
  const config: Config = {
    server: parseServerConfig(),
    cors: parseCORSConfig(),
    session: parseSessionConfig(),
    database: parseDatabaseConfig(),
    cache: parseCacheConfig(),
    auth: parseAuthConfig()
  };

  return config;
}

function parseServerConfig(): ServerConfig {
  function parseServerHTTPSConfig(): ServerHTTPSConfig | null {
    const crtFile: string = parseString('SERVER_CRT_FILE', '');
    const keyFile: string = parseString('SERVER_KEY_FILE', '');

    const https: ServerHTTPSConfig | null = crtFile && keyFile
      ? {
        crt: readFile(crtFile, 'utf-8'),
        key: readFile(keyFile, 'utf-8')
      }
      : null;

    return https;
  }

  const server: ServerConfig = {
    https: parseServerHTTPSConfig(),
    port: parseNumber('SERVER_PORT', 80)
  };

  return server;
}

function parseCORSConfig(): CORSConfig {
  const cors: CORSConfig = {
    origin: parseString('CORS_ORIGIN', '*')
  };

  return cors;
}

function parseSessionConfig(): SessionConfig {
  const session: SessionConfig = {
    domain: parseString('SESSION_DOMAIN', ''),
    secret: parseString('SESSION_SECRET', 'the quick brown fox jumped over the lazy dog')
  };

  return session;
}
