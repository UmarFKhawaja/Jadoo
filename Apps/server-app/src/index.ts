import 'reflect-metadata';
import { DATA_SOURCE } from '@jadoo/data-module';
import { config } from './config';
import { createExpressServer } from './methods';

process.nextTick(async () => {
  await DATA_SOURCE.initialize();

  const { httpServer, options } = await createExpressServer(config);

  httpServer.listen(config.server.port, () => {
    console.log(`Jadoo API is serving at ${options.usesSSL ? 'https' : 'http'}://localhost:${config.server.port}/graphql`);
  });
});
