import { inject as Inject, injectable as Injectable } from 'inversify';
import { DataSource, Repository } from 'typeorm';
import { Solution } from '../entities';
import { SolutionPage } from '../types';

@Injectable()
export class SolutionService {
  constructor(
    @Inject(DataSource) private dataSource: DataSource
  ) {
  }

  async findSolutionByID(id: string): Promise<Solution | null> {
    const solutionRepository: Repository<Solution> = this.dataSource.getRepository(Solution);

    const solution: Solution | null = await solutionRepository.findOne({
      where: {
        id
      }
    });

    return solution;
  }

  async findSolutionsByUserID(userID: string): Promise<Solution[]> {
    const solutionRepository: Repository<Solution> = this.dataSource.getRepository(Solution);

    const solutions: Solution[] = await solutionRepository.find({
      where: {
        users: {
          id: userID
        }
      }
    });

    return solutions;
  }

  async findSolutions(skip: number, take: number): Promise<SolutionPage> {
    const solutionRepository: Repository<Solution> = this.dataSource.getRepository(Solution);

    const [solutions, count]: [Solution[], number] = await solutionRepository.findAndCount({
      where: {
      },
      skip,
      take: take + 1
    });

    const hasMore: boolean = solutions.length === take + 1;

    return new SolutionPage(solutions, skip, take, count, hasMore);
  }
}
