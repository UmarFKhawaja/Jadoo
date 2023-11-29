import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Solution, Unit } from '../../entities';
import { Context } from '../../types';
import { SolutionInput, UnitInput } from './types';

@Resolver()
export class MutationResolver {
  constructor() {
  }

  @Mutation((type) => Solution)
  async createUnit(@Arg('unit') unit: UnitInput, @Ctx() context: Context): Promise<Unit> {
    throw new Error('not implemented');
  }

  @Mutation((type) => Solution)
  async createSolution(@Arg('solution') solution: SolutionInput, @Ctx() context: Context): Promise<Solution> {
    throw new Error('not implemented');
  }
}
