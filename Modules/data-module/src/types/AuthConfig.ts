import { AuthPortsConfig } from './AuthPortsConfig';

export interface AuthConfig {
  host: string;
  ports: AuthPortsConfig;
  useTLS: boolean;
}
