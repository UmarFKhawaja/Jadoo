import { guessFileMode } from '../../methods';
import { FileMode } from '../../types';
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

  static override create(name: string, mode?: FileMode): File {
    const file: File = new File(name, mode || guessFileMode(name));

    return file;
  }
}
