import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Photo, Solution, User } from '../../entities';
import { PhotoService, SolutionService } from '../../services';
import { Context } from '../../types';
import { PhotoArgs, SolutionsArgs } from './types';

@Resolver((of) => User)
export class UserResolver {
  private readonly photoService: PhotoService;

  private readonly solutionService: SolutionService;

  constructor() {
    this.photoService = new PhotoService();
    this.solutionService = new SolutionService();
  }

  @FieldResolver()
  async solutions(@Root() user: User, @Args() args: SolutionsArgs, @Ctx() context: Context): Promise<Solution[]> {
    const { id: userID }: User = user;

    const solutions: Solution[] = await this.solutionService.findSolutionsByUserID(userID);

    return solutions;
  }

  @FieldResolver({
    nullable: true
  })
  async photo(@Root() user: User, @Args() args: PhotoArgs, @Ctx() context: Context): Promise<Photo | null> {
    const { id: userID }: User = user;

    const photo: Photo | null = await this.photoService.findPhotoByUserID(userID);

    return photo;
  }
}
