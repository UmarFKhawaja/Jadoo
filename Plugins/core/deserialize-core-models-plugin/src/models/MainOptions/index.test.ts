import { InputOptions } from '@jadoo/plugin-library';
import { MainOptions } from '.';

describe('MainOptions', () => {
  describe('constructor', () => {
    it('constructs an instance of the options', () => {
      const options: MainOptions = new MainOptions('');

      expect(options).toBeInstanceOf(InputOptions);
      expect(options).toBeInstanceOf(MainOptions);
    });
  });

  describe('sourceDir', () => {
    it('returns the source dir in the options', () => {
      const options: MainOptions = new MainOptions('../../../Examples');

      expect(options.sourceDir).toEqual('../../../Examples');
    });
  });
});
