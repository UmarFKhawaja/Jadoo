import { createServer as createHttpServer, Server as HttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import { json } from 'body-parser';
import RedisStore from 'connect-redis';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, Request, Response, Router, urlencoded } from 'express';
import session from 'express-session';
import passport from 'passport';
import { CACHE, DataSource, GRPC, Redis } from '@jadoo/data-module';
import { CONFIG } from '../config';
import { createAPIRouter } from './createAPIRouter';

export async function createExpressServer(auth: GRPC, cache: Redis, dataSource: DataSource): Promise<{
  app: Express;
  httpServer: HttpServer,
  options: {
    usesSSL: boolean
  }
}> {
  const usesSSL: boolean = !!CONFIG.server.https;

  const app: Express = express();
  const httpServer: HttpServer = usesSSL
    ? createHttpsServer({
      cert: CONFIG.server.https?.crt,
      key: CONFIG.server.https?.key
    }, app)
    : createHttpServer(app);

  app.use(cors({
    origin: CONFIG.cors.origin,
    credentials: true
  }));
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(session({
    store: new RedisStore({
      client: <any>CACHE
    }),
    secret: CONFIG.session.secret,
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', await createAPIRouter(auth, cache, dataSource, httpServer));

  return {
    app,
    httpServer,
    options: {
      usesSSL
    }
  };
}
