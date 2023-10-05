import { InputOptions } from '@jadoo/plugin-library';
import { DeserializeCoreModelsOptions } from '.';

describe('DeserializeCoreModelsOptions', () => {
  describe('constructor', () => {
    it('constructs an instance of the options', () => {
      const options: DeserializeCoreModelsOptions = new DeserializeCoreModelsOptions('');

      expect(options).toBeInstanceOf(InputOptions);
      expect(options).toBeInstanceOf(DeserializeCoreModelsOptions);
    });
  });

  describe('sourceDir', () => {
    it('returns the source dir in the options', () => {
      const options: DeserializeCoreModelsOptions = new DeserializeCoreModelsOptions('../../../Examples');

      expect(options.sourceDir).toEqual('../../../Examples');
    });
  });
});
