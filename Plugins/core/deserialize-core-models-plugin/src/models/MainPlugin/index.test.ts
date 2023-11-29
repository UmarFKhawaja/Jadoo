import { Identifier } from '@jadoo/core-library';
import { Plugin, State } from '@jadoo/plugin-library';
import { MainOptions } from '../MainOptions';
import { MainPlugin } from '.';

describe('MainPlugin', () => {
  describe('constructor', () => {
    it('constructs an instance of the plugin', () => {
      const plugin: MainPlugin = new MainPlugin(
        Identifier.create('Main'),
        new MainOptions('../../../Examples/Jadoo')
      );

      expect(plugin).toBeInstanceOf(Plugin);
      expect(plugin).toBeInstanceOf(MainPlugin);
    });
  });

  describe('execute', () => {
    it('executes the plugin', async () => {
      const plugin: MainPlugin = new MainPlugin(
        Identifier.create('Main'),
        new MainOptions('../../../Examples/Jadoo')
      );

      const startState: State = new State([]);
      const endState: State = await plugin.execute(startState);

      expect(endState).toBeInstanceOf(State);
    })
  });
});
