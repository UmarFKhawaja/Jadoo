import 'reflect-metadata';
import { CONFIG, DATA_SOURCE } from '@jadoo/data-module';
import { createExpressServer } from './methods';

process.nextTick(async () => {
  await DATA_SOURCE.initialize();

  const { httpServer, options } = await createExpressServer(DATA_SOURCE);

  httpServer.listen(CONFIG.server.port, () => {
    console.log(`Jadoo API is serving at ${options.usesSSL ? 'https' : 'http'}://localhost:${CONFIG.server.port}/graphql`);
  });
});
