import { parseBoolean, parseNumber, parseString } from '@jadoo/core-module';
import { AuthConfig, AuthPortsConfig } from '../types';

export function parseAuthConfig(): AuthConfig {
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
