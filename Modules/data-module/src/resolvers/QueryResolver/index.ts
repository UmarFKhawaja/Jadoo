import { Args, Ctx, Query, Resolver } from 'type-graphql';
import { Solution, User } from '../../entities';
import { SolutionService, UserService } from '../../services';
import { Context, SolutionPage } from '../../types';
import {
  GetSolutionByIDArgs,
  GetSolutionsArgs,
  GetUserArgs,
  GetUserByEmailAddressArgs,
  GetUserByIDArgs,
  GetUserByUserNameArgs
} from './types';

@Resolver()
export class QueryResolver {
  private readonly solutionService: SolutionService;

  private readonly userService: UserService;

  constructor() {
    this.solutionService = new SolutionService();
    this.userService = new UserService();
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUser(@Args() args: GetUserArgs, @Ctx() context: Context): Promise<User | null> {
    const { userID: id }: Context = context;

    const user: User | null = await this.userService.findUserByID(id);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByID(@Args() args: GetUserByIDArgs, @Ctx() context: Context): Promise<User | null> {
    const { id }: GetUserByIDArgs = args;

    const user: User | null = await this.userService.findUserByID(id);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByEmailAddress(@Args() args: GetUserByEmailAddressArgs, @Ctx() context: Context): Promise<User | null> {
    const { emailAddress }: GetUserByEmailAddressArgs = args;

    const user: User | null = await this.userService.findUserByEmailAddress(emailAddress);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByUserName(@Args() args: GetUserByUserNameArgs, @Ctx() context: Context): Promise<User | null> {
    const { userName }: GetUserByUserNameArgs = args;

    const user: User | null = await this.userService.findUserByUserName(userName);

    return user;
  }

  @Query((returns) => SolutionPage, {
    nullable: false
  })
  async getSolutions(@Args() args: GetSolutionsArgs, @Ctx() context: Context): Promise<SolutionPage> {
    const { skip, take }: GetSolutionsArgs = args;

    const solutionPage: SolutionPage = await this.solutionService.findSolutions(skip, take);

    return solutionPage;
  }

  @Query((returns) => Solution, {
    nullable: true
  })
  async getSolutionByID(@Args() args: GetSolutionByIDArgs, @Ctx() context: Context): Promise<Solution | null> {
    const { id }: GetSolutionByIDArgs = args;

    const solution: Solution | null = await this.solutionService.findSolutionByID(id);

    return solution;
  }
}
