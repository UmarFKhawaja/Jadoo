import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import {
  MutationResolver,
  QueryResolver,
  SolutionResolver,
  UserResolver
} from '../resolvers';

export async function createGraphQLSchema(): Promise<GraphQLSchema> {
  const schema: GraphQLSchema = await buildSchema({
    resolvers: [
      MutationResolver,
      QueryResolver,
      SolutionResolver,
      UserResolver
    ]
  });

  return schema;
}
