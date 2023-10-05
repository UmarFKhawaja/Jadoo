import { Identifier } from '@jadoo/core-library';
import { Options, OptionsSpec } from '../Options';
import { State } from '../State';

export interface PluginSpec {
  name: string;
  options: OptionsSpec;
}

export abstract class Plugin {
  private readonly _name: Identifier;

  private readonly _options: Options;

  protected constructor(
    name: Identifier,
    options: Options
  ) {
    this._name = name;
    this._options = options;
  }

  get name(): Identifier {
    return this._name;
  }

  get options(): Options {
    return this._options;
  }

  abstract execute(state: State): Promise<State>;

  toJSON(): PluginSpec {
    return {
      name: this.name.paramCase,
      options: this.options.toJSON()
    };
  }

  static create(name: Identifier, options: Options): Plugin {
    throw new Error('not implemented');
  }
}
