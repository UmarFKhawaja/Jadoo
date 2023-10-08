import { relative as makeRelativePath } from 'path';
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
    const [directories, files] = this.getDirectoriesAndFiles();
    const children: Path[] = this.getPaths(directories, files);

    return children;
  }

  private getDirectoriesAndFiles(): [string[], string[]] {
    switch (this.mode) {
      case DirectoryMode.DEFAULT: {
        const directories: string[] = globSync(`${this.name}/*/`, {
          dot: true
        });
        const files: string[] = globSync(`${this.name}/*`, {
          dot: true
        })
          .filter((file: string) => !directories.includes(file));

        return [directories, files];
      }

      case DirectoryMode.RECURSIVE: {
        const directories: string[] = globSync(`${this.name}/**/`, {
          dot: true
        });
        const files: string[] = globSync(`${this.name}/**`, {
          dot: true
        })
          .filter((file: string) => !directories.includes(file));

        return [directories, files];
      }

      default:
        throw new Error(`unsupported mode ${this.mode}`);
    }
  }

  private getPaths(directories: string[], files: string[]): Path[] {
    switch (this.results) {
      case DirectoryResults.FILES_ONLY:
        return files.map((file: string) => File.create(makeRelativePath(this.name, file)));

      case DirectoryResults.DIRECTORIES_ONLY:
        return directories.map((directory: string) => Directory.create(makeRelativePath(this.name, directory), {
          mode: this.mode,
          results: this.results
        }));

      case DirectoryResults.EVERYTHING:
        return [
          ...directories.map((directory: string) => Directory.create(makeRelativePath(this.name, directory), {
            mode: this.mode,
            results: this.results
          })),
          ...files.map((file: string) => File.create(makeRelativePath(this.name, file)))
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
