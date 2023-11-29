import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Photo, Solution, Step, User } from '../../entities';
import { PhotoService, StepService, UserService } from '../../services';
import { Context } from '../../types';
import { PhotosArgs, StepsArgs, UsersArgs } from './types';

@Resolver((of) => Solution)
export class SolutionResolver {
  private readonly photoService: PhotoService;

  private readonly stepService: StepService;

  private readonly userService: UserService;

  constructor() {
    this.photoService = new PhotoService();
    this.stepService = new StepService();
    this.userService = new UserService();
  }

  @FieldResolver()
  async steps(@Root() solution: Solution, @Args() args: StepsArgs, @Ctx() context: Context): Promise<Step[]> {
    const { id: solutionID }: Solution = solution;

    const steps: Step[] = await this.stepService.findStepsBySolutionID(solutionID);

    return steps;
  }

  @FieldResolver()
  async users(@Root() solution: Solution, @Args() args: UsersArgs, @Ctx() context: Context): Promise<User[]> {
    const { id: solutionID }: Solution = solution;

    const users: User[] = await this.userService.findUsersBySolutionID(solutionID);

    return users;
  }

  @FieldResolver()
  async photos(@Root() solution: Solution, @Args() args: PhotosArgs, @Ctx() context: Context): Promise<Photo[]> {
    const { id: solutionID }: Solution = solution;

    const photos: Photo[] = await this.photoService.findPhotosBySolutionID(solutionID);

    return photos;
  }
}
