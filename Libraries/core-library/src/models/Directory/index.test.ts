import { Path } from '../Path';
import { DirectoryMode } from '../../types';
import { Directory } from '.';

describe('Directory', () => {
  describe('create', () => {
    it('creates a Directory with the given name and DEFAULT mode implicitly', () => {
      const directory: Directory = Directory.create('../../Example');

      expect(directory).toBeInstanceOf(Directory);
    });

    it('creates a Directory with the given name and DEFAULT mode explicitly', () => {
      const directory: Directory = Directory.create('../../Example', DirectoryMode.DEFAULT);

      expect(directory).toBeInstanceOf(Directory);
    });

    it('creates a Directory with the given name and RECURSIVE mode', () => {
      const directory: Directory = Directory.create('../../Example', DirectoryMode.RECURSIVE);

      expect(directory).toBeInstanceOf(Directory);
    });

    it('does not create a Directory with the given name and UNKNOWN mode', () => {
      expect(() => {
        const directory: Directory = Directory.create('../../Example', 'UNKNOWN' as DirectoryMode);

        expect(directory).toBeInstanceOf(Directory);
        expect(directory.children).toHaveLength(2);
      }).toThrowError('DirectoryMode UNKNOWN is not supported');
    });
  });

  describe('name', () => {
    it('gets name correctly', () => {
      const directory: Directory = Directory.create('../../Example');

      expect(directory.name).toEqual('../../Example');
    });
  });

  describe('mode', () => {
    it('gets mode correctly when mode is set to DEFAULT implicitly', () => {
      const directory: Directory = Directory.create('../../Example');

      expect(directory.mode).toEqual(DirectoryMode.DEFAULT);
    });

    it('gets mode correctly when mode is set to DEFAULT explicitly', () => {
      const directory: Directory = Directory.create('../../Example', DirectoryMode.DEFAULT);

      expect(directory.mode).toEqual(DirectoryMode.DEFAULT);
    });

    it('gets mode correctly when mode is set to RECURSIVE explicitly', () => {
      const directory: Directory = Directory.create('../../Example', DirectoryMode.RECURSIVE);

      expect(directory.mode).toEqual(DirectoryMode.RECURSIVE);
    });

    it('sets mode correctly', () => {
      const directory: Directory = Directory.create('../../Example', DirectoryMode.DEFAULT);

      directory.mode = DirectoryMode.RECURSIVE;

      expect(directory.mode).toEqual(DirectoryMode.RECURSIVE);
    });
  });

  describe('children', () => {
    it('returns child files and directories in implicit DEFAULT mode', () => {
      const directory: Directory = Directory.create('../../Examples');

      expect(directory.children).toBeInstanceOf(Array<Path>);
      expect(directory.children).toHaveLength(2);
    });

    it('returns child files and directories in explicit DEFAULT mode', () => {
      const directory: Directory = Directory.create('../../Examples', DirectoryMode.DEFAULT);

      expect(directory.children).toBeInstanceOf(Array<Path>);
      expect(directory.children).toHaveLength(2);
    });

    it('returns child files and directories in RECURSIVE mode', () => {
      const directory: Directory = Directory.create('../../Examples', DirectoryMode.RECURSIVE);

      expect(directory.children).toBeInstanceOf(Array<Path>);
      expect(directory.children).toHaveLength(41);
    });

    it('returns child files and directories in DEFAULT mode after mode has been switched', () => {
      const directory: Directory = Directory.create('../../Examples', DirectoryMode.RECURSIVE);

      directory.mode = DirectoryMode.DEFAULT;

      expect(directory.children).toBeInstanceOf(Array<Path>);
      expect(directory.children).toHaveLength(2);
    });

    it('returns child files and directories in RECURSIVE mode after mode has been switched', () => {
      const directory: Directory = Directory.create('../../Examples', DirectoryMode.DEFAULT);

      directory.mode = DirectoryMode.RECURSIVE;

      expect(directory.children).toBeInstanceOf(Array<Path>);
      expect(directory.children).toHaveLength(41);
    });
  });
});
