import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Solution, User } from '../../entities';
import { UserService } from '../../services';
import { Context } from '../../types';
import { UsersArgs } from './types';

@Resolver((of) => Solution)
export class SolutionResolver {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @FieldResolver()
  async users(@Root() solution: Solution, @Args() args: UsersArgs, @Ctx() context: Context): Promise<User[]> {
    const { id: solutionID }: Solution = solution;

    const users: User[] = await this.userService.findUsersBySolutionID(solutionID);

    return users;
  }
}
