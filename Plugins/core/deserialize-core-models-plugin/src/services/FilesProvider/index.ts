import { Directory, DirectoryMode, DirectoryResults, File, Path } from '@jadoo/core-library';

export class FilesProvider {
  constructor() {
  }

  provide(sourceDir: string): File[] {
    const directory: Directory = Directory.create(sourceDir, {
      mode: DirectoryMode.RECURSIVE,
      results: DirectoryResults.FILES_ONLY
    });

    const files: File[] = directory.children
      .map((path: Path): File => path as File)
      .filter((file: File): boolean => file.name.endsWith('.yaml'));

    return files;
  }
}