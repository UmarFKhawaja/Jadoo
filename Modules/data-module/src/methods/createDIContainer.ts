import { GRPC } from '@cerbos/grpc';
import { Container } from 'inversify';
import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { MutationResolver, QueryResolver, SolutionResolver, UserResolver } from '../resolvers';
import { SolutionService, UserService } from '../services';

export async function createDIContainer(container: Container, auth: GRPC, cache: Redis, dataSource: DataSource): Promise<Container> {
  container.bind<GRPC>(GRPC).toConstantValue(auth);
  container.bind<Redis>(Redis).toConstantValue(cache);
  container.bind<DataSource>(DataSource).toConstantValue(dataSource);

  container.bind<UserService>(UserService).to(UserService).inSingletonScope();
  container.bind<SolutionService>(SolutionService).to(SolutionService).inSingletonScope();

  container.bind<MutationResolver>(MutationResolver).to(MutationResolver).inSingletonScope();
  container.bind<QueryResolver>(QueryResolver).to(QueryResolver).inSingletonScope();
  container.bind<UserResolver>(UserResolver).to(UserResolver).inSingletonScope();
  container.bind<SolutionResolver>(SolutionResolver).to(SolutionResolver).inSingletonScope();

  return container;
}
