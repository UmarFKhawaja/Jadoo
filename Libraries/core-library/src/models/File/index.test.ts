import { FileMode } from '../../types';
import { File } from '.';

describe('File', () => {
  describe('create', () => {
    it('creates a File with the given name', () => {
      const file: File = File.create('Example/README.md');

      expect(file).toBeInstanceOf(File);
    });
  });

  describe('name', () => {
    it('gets name correctly', () => {
      const file: File = File.create('Example/README.md');

      expect(file.name).toEqual('Example/README.md');
    });
  });

  describe('mode', () => {
    it('gets mode correctly when mode is set to TEXT implicitly', () => {
      const file: File = File.create('../../Example/README.md');

      expect(file.mode).toEqual(FileMode.TEXT);
    });

    it('gets mode correctly when mode is set to TEXT explicitly', () => {
      const file: File = File.create('../../Example/README.md', {
        mode: FileMode.TEXT
      });

      expect(file.mode).toEqual(FileMode.TEXT);
    });

    it('gets mode correctly when mode is set to BINARY explicitly', () => {
      const file: File = File.create('../../Example/README.md', {
        mode: FileMode.BINARY
      });

      expect(file.mode).toEqual(FileMode.BINARY);
    });

    it('sets mode correctly', () => {
      const file: File = File.create('../../Example/README.md', {
        mode: FileMode.TEXT
      });

      file.mode = FileMode.BINARY;

      expect(file.mode).toEqual(FileMode.BINARY);
    });
  });
});
