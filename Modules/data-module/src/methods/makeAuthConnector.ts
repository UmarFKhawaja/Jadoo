import { GRPC } from '@cerbos/grpc';
import { Config } from '../types';

export function makeAuthConnector(config: Config): GRPC {
  return new GRPC(`${config.auth.host}:${config.auth.ports.grpc}`, {
    tls: config.auth.useTLS
  });
}
