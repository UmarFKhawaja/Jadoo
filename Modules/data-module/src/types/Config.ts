import { readFileSync as readFile } from 'fs';
import { parseBoolean, parseNumber, parseString } from '@jadoo/core-module';
import { AuthConfig } from './AuthConfig';
import { CacheConfig } from './CacheConfig';
import { CORSConfig } from './CORSConfig';
import { DatabaseConfig } from './DatabaseConfig';
import { ServerConfig } from './ServerConfig';
import { ServerHttpsConfig } from './ServerHttpsConfig';
import { SessionConfig } from './SessionConfig';
import { AuthPortsConfig } from './AuthPortsConfig';

export class Config {
  private static readonly Instance: Config = Config.createInstance();

  private readonly _cors: CORSConfig;

  private readonly _server: ServerConfig;

  private readonly _session: SessionConfig;

  private readonly _database: DatabaseConfig;

  private readonly _cache: CacheConfig;

  private readonly _auth: AuthConfig;

  private constructor(cors: CORSConfig, server: ServerConfig, session: SessionConfig, database: DatabaseConfig, cache: CacheConfig, auth: AuthConfig) {
    this._cors = cors;
    this._server = server;
    this._session = session;
    this._database = database;
    this._cache = cache;
    this._auth = auth;
  }

  static get instance(): Config {
    return Config.Instance;
  }

  get cors(): CORSConfig {
    return this._cors;
  }

  get server(): ServerConfig {
    return this._server;
  }

  get session(): SessionConfig {
    return this._session;
  }

  get database(): DatabaseConfig {
    return this._database;
  }

  get cache(): CacheConfig {
    return this._cache;
  }

  get auth(): AuthConfig {
    return this._auth;
  }

  private static createInstance(): Config {
    const cors: CORSConfig = Config.getCORSConfig();

    const server: ServerConfig = Config.getServerConfig();

    const session: SessionConfig = Config.getSessionConfig();

    const database: DatabaseConfig = Config.getDatabaseConfig();

    const cache: CacheConfig = Config.getCacheConfig();

    const auth: AuthConfig = Config.getAuthConfig();

    const config: Config = new Config(cors, server, session, database, cache, auth);

    return config;
  }

  private static getCORSConfig(): CORSConfig {
    function getOrigin(): boolean | string | RegExp | (boolean | string | RegExp)[] {
      const origin = parseString('CORS_ORIGIN', '*');

      return origin;
    }

    return {
      origin: getOrigin()
    };
  }

  private static getSessionConfig(): SessionConfig {
    return {
      domain: parseString('SESSION_DOMAIN', ''),
      secret: parseString('SESSION_SECRET', 'the quick brown fox jumped over the lazy dog')
    };
  }

  private static getServerConfig(): ServerConfig {
    function getHttps(): ServerHttpsConfig | null {
      const crtFile: string = parseString('SERVER_CRT_FILE', '');
      const keyFile: string = parseString('SERVER_KEY_FILE', '');

      const https: ServerHttpsConfig | null = crtFile && keyFile
        ? {
          crt: readFile(crtFile, 'utf-8'),
          key: readFile(keyFile, 'utf-8')
        }
        : null;

      return https;
    }

    function getPort(): number {
      const port: number = parseNumber('SERVER_PORT', 80);

      return port;
    }

    return {
      https: getHttps(),
      port: getPort()
    };
  }

  private static getDatabaseConfig(): DatabaseConfig {
    return {
      host: parseString('DATABASE_HOST', 'localhost'),
      port: parseNumber('DATABASE_PORT', 3306),
      username: parseString('DATABASE_USERNAME', 'jadoo'),
      password: parseString('DATABASE_PASSWORD', 'Jadoo123'),
      database: parseString('DATABASE_DATABASE', 'jadoo')
    };
  }

  private static getCacheConfig(): CacheConfig {
    const host: string = parseString('CACHE_HOST', 'localhost');
    const port: number = parseNumber('CACHE_PORT', 6379);
    const password: string = parseString('CACHE_PASSWORD', '');
    const useTLS: boolean = parseBoolean('CACHE_USE_TLS', false);

    return {
      host,
      port,
      password,
      useTLS
    };
  }

  private static getAuthConfig(): AuthConfig {
    function getPostsConfig(): AuthPortsConfig {
      const http: number = parseNumber('AUTH_HTTP_PORT', 3592);
      const grpc: number = parseNumber('AUTH_GRPC_PORT', 3593);

      return {
        http,
        grpc
      };
    }

    const host: string = parseString('AUTH_HOST', 'localhost');
    const ports: AuthPortsConfig = getPostsConfig();
    const useTLS: boolean = parseBoolean('AUTH_USE_TLS', false);

    return {
      host,
      ports,
      useTLS
    };
  }
}
