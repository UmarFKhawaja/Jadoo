import { Path } from '.';

describe('Path', () => {
  describe('create', () => {
    it('creates a Path with the given name', () => {
      const path: Path = Path.create('Example/Jadoo');

      expect(path).toBeInstanceOf(Path);
      expect(path.name).toEqual('Example/Jadoo');
    });
  });
});
