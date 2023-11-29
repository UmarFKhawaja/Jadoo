import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Photo, Solution, Step, Task } from '../../entities';
import { PhotoService, SolutionService, TaskService } from '../../services';
import { Context } from '../../types';
import { PhotosArgs, SolutionArgs, TasksArgs } from './types';

@Resolver((of) => Step)
export class StepResolver {
  private readonly photoService: PhotoService;

  private readonly solutionService: SolutionService;

  private readonly taskService: TaskService;

  constructor() {
    this.photoService = new PhotoService();
    this.solutionService = new SolutionService();
    this.taskService = new TaskService();
  }

  @FieldResolver({
    nullable: true
  })
  async solution(@Root() step: Step, @Args() args: SolutionArgs, @Ctx() context: Context): Promise<Solution | null> {
    const { id: stepID }: Step = step;

    const solution: Solution | null = await this.solutionService.findSolutionByStepID(stepID);

    return solution;
  }

  @FieldResolver()
  async tasks(@Root() step: Step, @Args() args: TasksArgs, @Ctx() context: Context): Promise<Task[]> {
    const { id: stepID }: Step = step;

    const tasks: Task[] = await this.taskService.findTasksByStepID(stepID);

    return tasks;
  }

  @FieldResolver()
  async photos(@Root() step: Step, @Args() args: PhotosArgs, @Ctx() context: Context): Promise<Photo[]> {
    const { id: stepID }: Step = step;

    const photos: Photo[] = await this.photoService.findPhotosByStepID(stepID);

    return photos;
  }
}
