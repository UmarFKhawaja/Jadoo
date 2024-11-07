import { extname as getExtension } from 'path';
import { FileMode } from '../../types';

export function guessFileMode(name: string): FileMode {
  const extension: string = getExtension(name);

  switch (extension) {
    case '.cs':
    case '.js':
    case '.ts':
    case '.json':
    case '.yaml':
    case '.xml':
    case '.html':
    case '.htm':
    case '.txt':
    case '.java':
    case '.py':
    case '.go':
    case '.md':
      return FileMode.TEXT;

    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.gif':
    case '.gifv':
    case '.mp3':
    case '.mp4':
    case '.mkv':
    case '.mov':
    case '.wav':
    case '.wmv':
    case '.zip':
    case '.tar':
    case '.tgz':
    case '.tar.gz':
    case '.gz':
    case '.7z':
      return FileMode.BINARY;

    default:
      return FileMode.BINARY;
  }
}
