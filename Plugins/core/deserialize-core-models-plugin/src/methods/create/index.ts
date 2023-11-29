import { isNull, isUndefined } from 'lodash';
import { Identifier } from '@jadoo/core-library';
import { Plugin } from '@jadoo/plugin-library';
import { MainOptions, MainPlugin } from '../../models';
import { MainPluginSpec } from '../../types';

export function create(json: MainPluginSpec): Plugin {
  if (!json || !json.options || isUndefined(json.options.sourceDir) || isNull(json.options.sourceDir)) {
    throw new Error('invalid options');
  }

  const mainPlugin: MainPlugin = new MainPlugin(
    Identifier.create(json.name),
    new MainOptions(json.options.sourceDir)
  );

  return mainPlugin;
}
