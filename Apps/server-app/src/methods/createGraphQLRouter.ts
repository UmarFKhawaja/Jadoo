import { Server as HttpServer } from 'http';
import { Router } from 'express';
import { Container } from 'inversify';
import { createGraphQLRequestHandler } from './createGraphQLRequestHandler';

export async function createGraphQLRouter(httpServer: HttpServer, container: Container): Promise<Router> {
  const router: Router = Router();

  router.use(await createGraphQLRequestHandler(httpServer, container));

  return router;
}
