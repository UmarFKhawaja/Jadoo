import { Title } from '@jadoo/core-library';
import { Schema } from '../Schema';
import { Value, ValueSpec } from '../Value';

export interface EnumSpec {
  kind: 'Enum';
  name: string;
  values: ValueSpec[];
}

export class Enum {
  private readonly _name: Title;

  private readonly _values: Value[];

  protected constructor(
    name: Title,
    values: ValueSpec[]
  ) {
    this._name = name;
    this._values = values.map((value: ValueSpec) => Value.create(value, this));
  }

  get name(): Title {
    return this._name;
  }

  get values(): Value[] {
    return [
      ...this._values
    ];
  }

  static create(json: EnumSpec, schema: Schema): Enum {
    const name: string = json.name;
    const values: ValueSpec[] = json.values;

    if (!name) {
      throw new Error('invalid enum');
    }

    if (!values || !values.length) {
      throw new Error('invalid enum');
    }

    const $enum: Enum = new Enum(
      Title.create(name),
      values
    );

    return $enum;
  }
}
