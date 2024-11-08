import { Server as HttpServer } from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { RequestHandler } from 'express';
import { Context, createGraphQLSchema } from '@jadoo/data-module';
import { Container } from 'inversify';
import { createApolloContext } from './createApolloContext';

export async function createGraphQLRequestHandler(httpServer: HttpServer, container: Container): Promise<RequestHandler> {
  const server: ApolloServer<Context> = new ApolloServer<Context>({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema: await createGraphQLSchema(container)
  });

  await server.start();

  return expressMiddleware(server, {
    context: createApolloContext
  });
}
