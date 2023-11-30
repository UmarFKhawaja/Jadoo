import { readFileSync as readFile } from 'fs';
import { parseBoolean, parseNumber, parseString } from '@jadoo/core-module';
import {
  AuthConfig,
  AuthPortsConfig,
  CacheConfig,
  Config,
  CORSConfig,
  DatabaseConfig,
  ServerConfig,
  ServerHTTPSConfig,
  SessionConfig
} from '../types';

export function makeConfig(): Config {
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

function parseDatabaseConfig(): DatabaseConfig {
  const database: DatabaseConfig = {
    host: parseString('DATABASE_HOST', 'localhost'),
    port: parseNumber('DATABASE_PORT', 3306),
    username: parseString('DATABASE_USERNAME', 'jadoo'),
    password: parseString('DATABASE_PASSWORD', 'Jadoo123'),
    database: parseString('DATABASE_DATABASE', 'jadoo')
  };

  return database;
}

function parseCacheConfig(): CacheConfig {
  const cache: CacheConfig = {
    host: parseString('CACHE_HOST', 'localhost'),
    port: parseNumber('CACHE_PORT', 6379),
    password: parseString('CACHE_PASSWORD', ''),
    useTLS: parseBoolean('CACHE_USE_TLS', false)
  };

  return cache;
}

function parseAuthConfig(): AuthConfig {
  function parseAuthPortsConfig(): AuthPortsConfig {
    const ports: AuthPortsConfig = {
      http: parseNumber('AUTH_HTTP_PORT', 3592),
      grpc: parseNumber('AUTH_GRPC_PORT', 3593)
    };

    return ports;
  }

  const auth: AuthConfig = {
    host: parseString('AUTH_HOST', 'localhost'),
    ports: parseAuthPortsConfig(),
    useTLS: parseBoolean('AUTH_USE_TLS', false)
  };

  return auth;
}
