import { inject as Inject, injectable as Injectable } from 'inversify';
import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Solution, User } from '../../entities';
import { UserService } from '../../services';
import { Context } from '../../types';
import { UsersArgs } from './types';

@Injectable()
@Resolver((of) => Solution)
export class SolutionResolver {
  constructor(
    @Inject(UserService) private readonly userService: UserService
  ) {
  }

  @FieldResolver()
  async users(@Root() solution: Solution, @Args() args: UsersArgs, @Ctx() context: Context): Promise<User[]> {
    const { id: solutionID }: Solution = solution;

    const users: User[] = await this.userService.findUsersBySolutionID(solutionID);

    return users;
  }
}
