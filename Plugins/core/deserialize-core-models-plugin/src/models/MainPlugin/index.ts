import { File, Identifier } from '@jadoo/core-library';
import { ModelKind, ModelSpec, Solution } from '@jadoo/data-library';
import { InputOptions, Options, Plugin, State } from '@jadoo/plugin-library';
import { FilesProvider, ModelsMapper, SolutionsCreator } from '../../services';

export class MainPlugin extends Plugin {
  constructor(name: Identifier, options: Options) {
    super(name, options);
  }

  private get inputOptions(): InputOptions {
    return this.options as InputOptions;
  }

  override async execute(state: State): Promise<State> {
    const filesProvider: FilesProvider = new FilesProvider();
    const modelsMapper: ModelsMapper = new ModelsMapper();
    const solutionsCreator: SolutionsCreator = new SolutionsCreator();

    const files: File[] = filesProvider.provide(this.inputOptions.sourceDir);
    const map: Map<ModelKind, Map<string, ModelSpec>> = modelsMapper.map(files);

    const solutions: Solution[] = solutionsCreator.create(map);

    state = state
      .withSolutions(
        state.solutions.concat(solutions)
      );

    return state;
  }
}
