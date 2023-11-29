import { globSync } from 'glob';
import { DirectoryMode, DirectoryOptions, DirectoryResults } from '../../types';
import { File } from '../File';
import { Path } from '../Path';

export class Directory extends Path {
  private _mode: DirectoryMode;

  private _results: DirectoryResults;

  protected constructor(name: string, mode: DirectoryMode, results: DirectoryResults) {
    super(name);

    this._mode = mode;
    this._results = results;
  }

  get mode(): DirectoryMode {
    return this._mode;
  }

  set mode(mode: DirectoryMode) {
    this._mode = mode;
  }

  get results(): DirectoryResults {
    return this._results;
  }

  set results(results: DirectoryResults) {
    this._results = results;
  }

  get children(): Path[] {
    let directories: string[] = [];
    let files: string[] = [];

    switch (this.mode) {
      case DirectoryMode.DEFAULT: {
        directories = globSync(`${this.name}/*/`, {
          dot: true
        });
        files = globSync(`${this.name}/*`, {
          dot: true
        })
          .filter((file: string) => !directories.includes(file));

        break;
      }

      case DirectoryMode.RECURSIVE: {
        directories = globSync(`${this.name}/**/`, {
          dot: true
        });
        files = globSync(`${this.name}/**`, {
          dot: true
        })
          .filter((file: string) => !directories.includes(file));

        break;
      }

      default:
        throw new Error(`unsupported mode ${this.mode}`);
    }

    switch (this.results) {
      case DirectoryResults.FILES_ONLY:
        return files.map((file: string) => File.create(file));

      case DirectoryResults.DIRECTORIES_ONLY:
        return directories.map((directory: string) => Directory.create(directory, {
          mode: this.mode,
          results: this.results
        }));

      case DirectoryResults.EVERYTHING:
        return [
          ...directories.map((directory: string) => Directory.create(directory, {
            mode: this.mode,
            results: this.results
          })),
          ...files.map((file: string) => File.create(file))
        ];

      default:
        throw new Error(`unsupported results ${this.results}`);
    }
  }

  static override create(name: string, options?: DirectoryOptions): Directory {
    const directory: Directory = new Directory(
      name,
      options?.mode || DirectoryMode.DEFAULT,
      options?.results || DirectoryResults.EVERYTHING
    );

    return directory;
  }
}
