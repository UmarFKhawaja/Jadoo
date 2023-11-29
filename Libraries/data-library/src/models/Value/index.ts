import { isNumber, isString } from 'lodash';
import { Identifier, toConstantCase } from '@jadoo/core-library';
import { Enum } from '../Enum';

export type ValueKind =
  | 'IntegerValue'
  | 'StringValue'
  | 'UndefinedValue';

export type ValueSpec =
  | IntegerValueSpec
  | StringValueSpec
  | UndefinedValueSpec;

export interface IntegerValueSpec {
  kind: 'IntegerValue';
  name: string;
  value: number;
}

export interface StringValueSpec {
  kind: 'StringValue';
  name: string;
  value: string;
}

export interface UndefinedValueSpec {
  kind: 'UndefinedValue';
  name: string;
}

export abstract class Value {
  private readonly _name: Identifier;

  protected constructor(
    name: Identifier
  ) {
    this._name = name;
  }

  get name(): Identifier {
    return this._name;
  }

  abstract toJSON(): ValueSpec;

  static create(json: ValueSpec, $enum: Enum): Value {
    const kind: ValueKind = json.kind;

    switch (kind) {
      case 'IntegerValue':
        return IntegerValue.create(json as IntegerValueSpec, $enum);

      case 'StringValue':
        return StringValue.create(json as StringValueSpec, $enum);

      case 'UndefinedValue':
        return UndefinedValue.create(json as UndefinedValueSpec, $enum);

      default:
        throw new Error('unsupported value kind');
    }
  }
}

export class IntegerValue extends Value {
  private readonly _value: number;

  protected constructor(
    name: Identifier,
    value: number
  ) {
    super(name);

    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  override toJSON(): IntegerValueSpec {
    return {
      kind: 'IntegerValue',
      name: this.name.paramCase,
      value: this.value
    };
  }

  static override create(json: IntegerValueSpec, $enum: Enum): IntegerValue {
    const name: string = json.name;
    const value: number = json.value;

    if (!name) {
      throw new Error('invalid value');
    }

    if (!isNumber(value)) {
      throw new Error('invalid value');
    }

    const integerValue: IntegerValue = new IntegerValue(
      Identifier.create(name),
      value
    );

    return integerValue;
  }
}

export class StringValue extends Value {
  private readonly _value: string;

  protected constructor(
    name: Identifier,
    value: string
  ) {
    super(name);

    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  override toJSON(): StringValueSpec {
    return {
      kind: 'StringValue',
      name: this.name.paramCase,
      value: this.value
    };
  }

  static override create(json: StringValueSpec, $enum: Enum): StringValue {
    const name: string = json.name;
    const value: string = json.value;

    if (!name) {
      throw new Error('invalid value');
    }

    if (!isString(value)) {
      throw new Error('invalid value');
    }

    const stringValue: StringValue = new StringValue(
      Identifier.create(name),
      toConstantCase(value)
    );

    return stringValue;
  }
}

export class UndefinedValue extends Value {
  protected constructor(
    name: Identifier
  ) {
    super(name);
  }

  override toJSON(): UndefinedValueSpec {
    return {
      kind: 'UndefinedValue',
      name: this.name.paramCase
    };
  }

  static override create(json: UndefinedValueSpec, $enum: Enum): UndefinedValue {
    const name: string = json.name || '';

    if (!name) {
      throw new Error('invalid value');
    }

    const undefinedValue: UndefinedValue = new UndefinedValue(
      Identifier.create(name)
    );

    return undefinedValue;
  }
}
