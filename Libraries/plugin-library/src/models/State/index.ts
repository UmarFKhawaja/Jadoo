import { Solution, SolutionSpec } from '@jadoo/data-library';

export interface StateSpec {
  solutions: SolutionSpec[];
}

export class State {
  private readonly _solutions: Solution[];

  constructor(solutions: Solution[]) {
    this._solutions = solutions;
  }

  get solutions(): Solution[] {
    return [
      ...this._solutions
    ];
  }

  toJSON(): StateSpec {
    return {
      solutions: this.solutions.map((solution: Solution) => solution.toJSON())
    };
  }

  withSolutions(solutions: Solution[]): State {
    return new State(solutions);
  }
}
