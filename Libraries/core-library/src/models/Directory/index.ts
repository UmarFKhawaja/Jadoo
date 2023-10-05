import { relative as makeRelativePath } from 'path';
import { globSync } from 'glob';
import { DirectoryMode } from '../../types';
import { File } from '../File';
import { Path } from '../Path';
import * as process from 'process';

export class Directory extends Path {
  private _mode: DirectoryMode;

  protected constructor(name: string, mode: DirectoryMode) {
    super(name);

    this._mode = mode;
  }

  get mode(): DirectoryMode {
    return this._mode;
  }

  set mode(mode: DirectoryMode) {
    this._mode = mode;
  }

  get children(): Path[] {
    switch (this.mode) {
      case DirectoryMode.DEFAULT: {
        const directories: string[] = globSync(`${this.name}/*/`);
        const files: string[] = globSync(`${this.name}/*`)
          .filter((file: string) => !directories.includes(file));

        const children: Path[] = [
          ...directories
            .map((directory: string) => Directory.create(makeRelativePath(this.name, directory))),
          ...files.map((file: string) => File.create(makeRelativePath(this.name, file)))
        ];

        return children;
      }

      case DirectoryMode.RECURSIVE: {
        const directories: string[] = globSync(`${this.name}/**/`);
        const files: string[] = globSync(`${this.name}/**`)
          .filter((file: string) => !directories.includes(file));

        const children: Path[] = [
          ...directories
            .map((directory: string) => Directory.create(makeRelativePath(this.name, directory), this.mode)),
          ...files.map((file: string) => File.create(makeRelativePath(this.name, file)))
        ];

        return children;
      }

      default:
        throw new Error(`DirectoryMode ${this.mode} is not supported`);
    }
  }

  static override create(name: string, mode?: DirectoryMode): Directory {
    const directory: Directory = new Directory(name, mode || DirectoryMode.DEFAULT);

    return directory;
  }
}
