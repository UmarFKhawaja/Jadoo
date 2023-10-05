import { isNull, isUndefined } from 'lodash';
import { Identifier } from '@jadoo/core-library';
import { Plugin } from '@jadoo/plugin-library';
import {
  DeserializeCoreModelsOptions,
  DeserializeCoreModelsPlugin,
  DeserializeCoreModelsPluginSpec
} from '../../types';

export function create(json: DeserializeCoreModelsPluginSpec): Plugin {
  if (!json || !json.options || isUndefined(json.options.sourceDir) || isNull(json.options.sourceDir)) {
    throw new Error('invalid options');
  }

  const deserializeCoreModelsPlugin: DeserializeCoreModelsPlugin = new DeserializeCoreModelsPlugin(
    Identifier.create(json.name),
    new DeserializeCoreModelsOptions(json.options.sourceDir)
  );

  return deserializeCoreModelsPlugin;
}
