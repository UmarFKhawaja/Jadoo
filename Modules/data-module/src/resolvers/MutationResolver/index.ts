import { injectable as Injectable } from 'inversify';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Solution } from '../../entities';
import { Context } from '../../types';
import { SolutionInput } from './types';

@Injectable()
@Resolver()
export class MutationResolver {
  constructor(
  ) {
  }

  @Mutation((type) => Solution)
  @Mutation((type) => Solution)
  async createSolution(@Arg('solution') solution: SolutionInput, @Ctx() context: Context): Promise<Solution> {
    throw new Error('not implemented');
  }
}
