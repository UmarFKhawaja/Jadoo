import 'reflect-metadata';
import { AUTH, CACHE, DATA_SOURCE } from '@jadoo/data-module';
import { CONFIG } from './config';
import { createExpressServer } from './methods';

process.nextTick(async () => {
  await DATA_SOURCE.initialize();

  const { httpServer, options } = await createExpressServer(AUTH, CACHE, DATA_SOURCE);

  httpServer.listen(CONFIG.server.port, () => {
    console.log(`Jadoo API is serving at ${options.usesSSL ? 'https' : 'http'}://localhost:${CONFIG.server.port}/api/graphql`);
  });
});
