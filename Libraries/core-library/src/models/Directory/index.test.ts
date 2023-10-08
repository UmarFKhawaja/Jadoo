import { Path } from '../Path';
import { DirectoryMode, DirectoryOptions, DirectoryResults } from '../../types';
import { Directory } from '.';

describe('Directory', () => {
  describe('create', () => {
    it('creates a Directory with the given name and DEFAULT mode implicitly', () => {
      const directory: Directory = Directory.create('../../Examples');

      expect(directory).toBeInstanceOf(Directory);
    });

    it('creates a Directory with the given name and DEFAULT mode explicitly', () => {
      const directory: Directory = Directory.create('../../Examples', {
        mode: DirectoryMode.DEFAULT
      });

      expect(directory).toBeInstanceOf(Directory);
    });

    it('creates a Directory with the given name and RECURSIVE mode', () => {
      const directory: Directory = Directory.create('../../Examples', {
        mode: DirectoryMode.RECURSIVE
      });

      expect(directory).toBeInstanceOf(Directory);
    });

    it('does not create a Directory with the given name and UNKNOWN mode', () => {
      expect(() => {
        const directory: Directory = Directory.create('../../Examples', {
          mode: 'UNKNOWN' as unknown as DirectoryMode
        });

        expect(directory).toBeInstanceOf(Directory);
        expect(directory.children).toHaveLength(2);
      }).toThrowError('unsupported mode UNKNOWN');
    });

    it('does not create a Directory with the given name and UNKNOWN results', () => {
      expect(() => {
        const directory: Directory = Directory.create('../../Examples', {
          results: 'UNKNOWN' as unknown as DirectoryResults
        });

        expect(directory).toBeInstanceOf(Directory);
        expect(directory.children).toHaveLength(2);
      }).toThrowError('unsupported results UNKNOWN');
    });
  });

  describe('name', () => {
    it('gets name correctly', () => {
      const directory: Directory = Directory.create('../../Examples');

      expect(directory.name).toEqual('../../Examples');
    });
  });

  describe('mode and results', () => {
    const cases: [DirectoryMode, DirectoryResults, DirectoryOptions][] = [
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {}
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.DEFAULT
        }
      ],
      [
        DirectoryMode.RECURSIVE,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.RECURSIVE
        }
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.FILES_ONLY,
        {
          results: DirectoryResults.FILES_ONLY
        }
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.DIRECTORIES_ONLY,
        {
          results: DirectoryResults.DIRECTORIES_ONLY
        }
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {
          results: DirectoryResults.EVERYTHING
        }
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.FILES_ONLY,
        {
          mode: DirectoryMode.DEFAULT,
          results: DirectoryResults.FILES_ONLY
        }
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.DIRECTORIES_ONLY,
        {
          mode: DirectoryMode.DEFAULT,
          results: DirectoryResults.DIRECTORIES_ONLY
        }
      ],
      [
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.DEFAULT,
          results: DirectoryResults.EVERYTHING
        }
      ],
      [
        DirectoryMode.RECURSIVE,
        DirectoryResults.FILES_ONLY,
        {
          mode: DirectoryMode.RECURSIVE,
          results: DirectoryResults.FILES_ONLY
        }
      ],
      [
        DirectoryMode.RECURSIVE,
        DirectoryResults.DIRECTORIES_ONLY,
        {
          mode: DirectoryMode.RECURSIVE,
          results: DirectoryResults.DIRECTORIES_ONLY
        }
      ],
      [
        DirectoryMode.RECURSIVE,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.RECURSIVE,
          results: DirectoryResults.EVERYTHING
        }
      ]
    ];

    it.each(cases)('returns mode %p and results %p when options are %p', (mode: DirectoryMode, results: DirectoryResults, options: DirectoryOptions) => {
      const directory: Directory = Directory.create('../../Examples', options);

      expect(directory.mode).toEqual(mode);
      expect(directory.results).toEqual(results);
    });

    it('returns mode DEFAULT and results EVERYTHING when options are not provided', () => {
      const directory: Directory = Directory.create('../../Examples');

      expect(directory.mode).toEqual(DirectoryMode.DEFAULT);
      expect(directory.results).toEqual(DirectoryResults.EVERYTHING);
    });

    it('returns mode RECURSIVE when mode is changed from DEFAULT to RECURSIVE', () => {
      const directory: Directory = Directory.create('../../Examples', {
        mode: DirectoryMode.DEFAULT
      });

      directory.mode = DirectoryMode.RECURSIVE;

      expect(directory.mode).toEqual(DirectoryMode.RECURSIVE);

      const children: Path[] = directory.children;

      expect(children).toBeInstanceOf(Array<Path>);
      expect(children.length).toEqual(42);
    });

    it('returns results FILES_ONLY when results is changed from EVERYTHING to FILES_ONLY', () => {
      const directory: Directory = Directory.create('../../Examples', {
        results: DirectoryResults.EVERYTHING
      });

      directory.results = DirectoryResults.FILES_ONLY;

      expect(directory.results).toEqual(DirectoryResults.FILES_ONLY);

      const children: Path[] = directory.children;

      expect(children).toBeInstanceOf(Array<Path>);
      expect(children.length).toEqual(1);
    });

    it('returns results FILES_ONLY when results is changed from EVERYTHING to DIRECTORIES_ONLY', () => {
      const directory: Directory = Directory.create('../../Examples', {
        results: DirectoryResults.EVERYTHING
      });

      directory.results = DirectoryResults.DIRECTORIES_ONLY;

      expect(directory.results).toEqual(DirectoryResults.DIRECTORIES_ONLY);

      const children: Path[] = directory.children;

      expect(children).toBeInstanceOf(Array<Path>);
      expect(children.length).toEqual(1);
    });
  });

  describe('children', () => {
    const cases: [number, DirectoryMode, DirectoryResults, DirectoryOptions][] = [
      [
        2,
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {}
      ],
      [
        2,
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.DEFAULT
        }
      ],
      [
        42,
        DirectoryMode.RECURSIVE,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.RECURSIVE
        }
      ],
      [
        1,
        DirectoryMode.DEFAULT,
        DirectoryResults.FILES_ONLY,
        {
          results: DirectoryResults.FILES_ONLY
        }
      ],
      [
        1,
        DirectoryMode.DEFAULT,
        DirectoryResults.DIRECTORIES_ONLY,
        {
          results: DirectoryResults.DIRECTORIES_ONLY
        }
      ],
      [
        2,
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {
          results: DirectoryResults.EVERYTHING
        }
      ],
      [
        1,
        DirectoryMode.DEFAULT,
        DirectoryResults.FILES_ONLY,
        {
          mode: DirectoryMode.DEFAULT,
          results: DirectoryResults.FILES_ONLY
        }
      ],
      [
        1,
        DirectoryMode.DEFAULT,
        DirectoryResults.DIRECTORIES_ONLY,
        {
          mode: DirectoryMode.DEFAULT,
          results: DirectoryResults.DIRECTORIES_ONLY
        }
      ],
      [
        2,
        DirectoryMode.DEFAULT,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.DEFAULT,
          results: DirectoryResults.EVERYTHING
        }
      ],
      [
        19,
        DirectoryMode.RECURSIVE,
        DirectoryResults.FILES_ONLY,
        {
          mode: DirectoryMode.RECURSIVE,
          results: DirectoryResults.FILES_ONLY
        }
      ],
      [
        23,
        DirectoryMode.RECURSIVE,
        DirectoryResults.DIRECTORIES_ONLY,
        {
          mode: DirectoryMode.RECURSIVE,
          results: DirectoryResults.DIRECTORIES_ONLY
        }
      ],
      [
        42,
        DirectoryMode.RECURSIVE,
        DirectoryResults.EVERYTHING,
        {
          mode: DirectoryMode.RECURSIVE,
          results: DirectoryResults.EVERYTHING
        }
      ]
    ];

    it.each(cases)('returns %p items when mode is %p and results is %p where options are %p', (length: number, mode: DirectoryMode, results: DirectoryResults, options: DirectoryOptions) => {
      const directory: Directory = Directory.create('../../Examples', options);

      const children: Path[] = directory.children;

      expect(children).toBeInstanceOf(Array<Path>);
      expect(children).toHaveLength(length);
    });

    it('returns 2 items when mode is DEFAULT and results is EVERYTHING where options are not provided', () => {
      const directory: Directory = Directory.create('../../Examples');

      const children: Path[] = directory.children;

      expect(children).toBeInstanceOf(Array<Path>);
      expect(children).toHaveLength(2);
    });
  });
});
