import { DataSource, GRPC, Redis } from '@jadoo/data-module';
import { Server as HttpServer } from 'http';
import { Router } from 'express';
import { Container } from 'inversify';
import { createAuthRouter } from './createAuthRouter';
import { createGraphQLRouter } from './createGraphQLRouter';
import { createHealthRouter } from './createHealthRouter';
import { createProfileRouter } from './createProfileRouter';
import { createStatusRouter } from './createStatusRouter';

export async function createAPIRouter(auth: GRPC, cache: Redis, dataSource: DataSource, httpServer: HttpServer, container: Container): Promise<Router> {
  const router: Router = Router();

  router.use('/health', await createHealthRouter());
  router.use('/status', await createStatusRouter());
  router.use('/auth', await createAuthRouter(auth, cache, dataSource));
  router.use('/profile', await createProfileRouter());
  router.use('/graphql', await createGraphQLRouter(httpServer, container));

  return router;
}
