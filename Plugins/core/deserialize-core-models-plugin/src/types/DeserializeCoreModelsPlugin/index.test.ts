import { Identifier } from '@jadoo/core-library';
import { Plugin, State } from '@jadoo/plugin-library';
import { DeserializeCoreModelsOptions } from '../DeserializeCoreModelsOptions';
import { DeserializeCoreModelsPlugin } from '.';

describe('DeserializeCoreModelsPlugin', () => {
  describe('constructor', () => {
    it('constructs an instance of the plugin', () => {
      const plugin: DeserializeCoreModelsPlugin = new DeserializeCoreModelsPlugin(
        Identifier.create('DeserializeCoreModels'),
        new DeserializeCoreModelsOptions('../../../Example')
      );

      expect(plugin).toBeInstanceOf(Plugin);
      expect(plugin).toBeInstanceOf(DeserializeCoreModelsPlugin);
    });
  });

  describe('execute', () => {
    it('executes the plugin', async () => {
      const plugin: DeserializeCoreModelsPlugin = new DeserializeCoreModelsPlugin(
        Identifier.create('DeserializeCoreModels'),
        new DeserializeCoreModelsOptions('../../../Example')
      );

      const startState: State = new State();
      const endState: State = await plugin.execute(startState);

      expect(endState).toBeInstanceOf(State);
    })
  });
});
