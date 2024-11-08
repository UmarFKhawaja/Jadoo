import { GraphQLSchema } from 'graphql';
import { Container } from 'inversify';
import { buildSchema } from 'type-graphql';
import {
  MutationResolver,
  QueryResolver,
  SolutionResolver,
  UserResolver
} from '../resolvers';

export async function createGraphQLSchema(container: Container): Promise<GraphQLSchema> {
  const schema: GraphQLSchema = await buildSchema({
    container: () => container,
    resolvers: [
      MutationResolver,
      QueryResolver,
      SolutionResolver,
      UserResolver
    ]
  });

  return schema;
}
