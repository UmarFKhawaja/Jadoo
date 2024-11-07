import { GRPC } from '@cerbos/grpc';
import { AuthConfig } from '../types';

export function makeAuthConnector(authConfig: AuthConfig): GRPC {
  return new GRPC(`${authConfig.host}:${authConfig.ports.grpc}`, {
    tls: authConfig.useTLS
  });
}
