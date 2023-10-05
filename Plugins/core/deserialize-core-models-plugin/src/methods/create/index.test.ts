import { Identifier } from '@jadoo/core-library';
import { Plugin } from '@jadoo/plugin-library';
import { DeserializeCoreModelsPluginSpec } from '../../types';
import { create } from '.';

describe('create', () => {
  it('creates the plugin when correct spec is provided', () => {
    const plugin: Plugin = create({
      name: 'DeserializeCoreModelsPlugin',
      options: {
        kind: 'InputOptions',
        sourceDir: ''
      }
    });

    expect(plugin.name).toBeInstanceOf(Identifier);
    expect(plugin.name.paramCase).toEqual('deserialize-core-models-plugin');
  });

  it('does not create the plugin when spec is undefined', () => {
    expect(() => {
      create(undefined as unknown as DeserializeCoreModelsPluginSpec);
    }).toThrowError('invalid options');
  });

  it('does not create the plugin when options in spec is undefined', () => {
    expect(() => {
      create({} as unknown as DeserializeCoreModelsPluginSpec);
    }).toThrowError('invalid options');
  });

  it('does not create the plugin when sourceDir in options in spec is undefined', () => {
    expect(() => {
      create({
        options: {
        }
      } as DeserializeCoreModelsPluginSpec);
    }).toThrowError('invalid options');
  });

  it('does not create the plugin when sourceDir in options in spec is null', () => {
    expect(() => {
      create({
        options: {
          sourceDir: null as unknown as string
        }
      } as DeserializeCoreModelsPluginSpec);
    }).toThrowError('invalid options');
  });
});
