import { File, Directory, DirectoryMode, Identifier, Path } from '@jadoo/core-library';
import { InputOptions, Options, Plugin, State } from '@jadoo/plugin-library';

export class DeserializeCoreModelsPlugin extends Plugin {
  constructor(name: Identifier, options: Options) {
    super(name, options);
  }

  private get inputOptions(): InputOptions {
    return this.options as InputOptions;
  }

  override async execute(state: State): Promise<State> {
    const directory: Directory = Directory.create(this.inputOptions.sourceDir, DirectoryMode.RECURSIVE);

    const files: File[] = directory.children
      .filter((path: Path): boolean => path instanceof File)
      .map((path: Path): File => path as File);

    return state;
  }
}
