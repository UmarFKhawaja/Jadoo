import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { DataSource } from 'typeorm';
import { Solution, User } from '../../entities';
import { SolutionService } from '../../services';
import { Context } from '../../types';
import { SolutionsArgs } from './types';

@Resolver((of) => User)
export class UserResolver {
  private readonly solutionService: SolutionService;

  constructor(
    dataSource: DataSource
  ) {
    this.solutionService = new SolutionService(dataSource);
  }

  @FieldResolver()
  async solutions(@Root() user: User, @Args() args: SolutionsArgs, @Ctx() context: Context): Promise<Solution[]> {
    const { id: userID }: User = user;

    const solutions: Solution[] = await this.solutionService.findSolutionsByUserID(userID);

    return solutions;
  }
}
