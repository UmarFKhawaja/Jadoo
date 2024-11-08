import { inject as Inject, injectable as Injectable } from 'inversify';
import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Solution, User } from '../../entities';
import { SolutionService } from '../../services';
import { Context } from '../../types';
import { SolutionsArgs } from './types';

@Injectable()
@Resolver((of) => User)
export class UserResolver {
  constructor(
    @Inject(SolutionService) private readonly solutionService: SolutionService
  ) {
  }

  @FieldResolver()
  async solutions(@Root() user: User, @Args() args: SolutionsArgs, @Ctx() context: Context): Promise<Solution[]> {
    const { id: userID }: User = user;

    const solutions: Solution[] = await this.solutionService.findSolutionsByUserID(userID);

    return solutions;
  }
}
