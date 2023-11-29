import { ServerConfig } from './ServerConfig';

export class Config {
  private static readonly Instance: Config = Config.createInstance();

  private readonly _server: ServerConfig;

  private constructor(server: ServerConfig) {
    this._server = server;
  }

  static get instance(): Config {
    return Config.Instance;
  }

  get server(): ServerConfig {
    return this._server;
  }

  private static createInstance(): Config {
    const server: ServerConfig = Config.getServerConfig();

    const config: Config = new Config(server);

    return config;
  }

  private static getServerConfig(): ServerConfig {
    function getURL(): string {
      const url: string = import.meta.env.SERVER_URL || '';

      return url;
    }

    return {
      url: getURL()
    };
  }
}
