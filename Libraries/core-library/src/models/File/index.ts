import { readFileSync } from 'fs';
import { guessFileMode } from '../../methods';
import { FileMode, FileOptions } from '../../types';
import { Path } from '../Path';

export class File extends Path {
  private _mode: FileMode;

  protected constructor(name: string, mode: FileMode) {
    super(name);

    this._mode = mode;
  }

  get mode(): FileMode {
    return this._mode;
  }

  set mode(mode: FileMode) {
    this._mode = mode;
  }

  get content(): Buffer {
    switch (this.mode) {
      case FileMode.BINARY:
        return readFileSync(this.name);

      case FileMode.TEXT:
        return Buffer.from(readFileSync(this.name, {
          encoding: 'utf-8'
        }));

      default:
        throw new Error(`unsupported mode ${this.mode}`);
    }
  }

  static override create(name: string, options?: FileOptions): File {
    const file: File = new File(name, options?.mode || guessFileMode(name));

    return file;
  }
}
