import { IntegerValue, StringValue, UndefinedValue, Value, ValueKind, ValueSpec } from '.';
import { Schema } from '../Schema';
import { Enum } from '../Enum';
import { Identifier } from '@jadoo/core-library';
import { Solution } from '../Solution';

const solution: Solution = Solution.create({
  kind: 'Solution',
  name: 'Jadoo'
});

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance'
}, solution);

const $enum: Enum = Enum.create({
  kind: 'Enum',
  name: 'account-types',
  values: [
    {
      kind: 'UndefinedValue',
      name: 'debit'
    },
    {
      kind: 'UndefinedValue',
      name: 'credit'
    }
  ]
}, schema)

describe('Value', () => {
  describe('name', () => {
    it('returns an Identifier', () => {
      const value: Value = Value.create({
        kind: 'UndefinedValue',
        name: 'debit'
      }, $enum);

      expect(value.name).toBeInstanceOf(Identifier);
      expect(value.name.paramCase).toEqual('debit');
    });
  });

  describe('create', () => {
    it('creates an integer value', () => {
      const value: Value = Value.create({
        kind: 'IntegerValue',
        name: 'red',
        value: 0x00FF0000
      }, $enum);

      expect(value).toBeInstanceOf(Value);
      expect(value).toBeInstanceOf(IntegerValue);
    });

    it('creates an string value', () => {
      const value: Value = Value.create({
        kind: 'StringValue',
        name: 'credit',
        value: 'credit'
      }, $enum);

      expect(value).toBeInstanceOf(Value);
      expect(value).toBeInstanceOf(StringValue);
    });

    it('creates an undefined value', () => {
      const value: Value = Value.create({
        kind: 'UndefinedValue',
        name: 'start'
      }, $enum);

      expect(value).toBeInstanceOf(Value);
      expect(value).toBeInstanceOf(UndefinedValue);
    });

    it('does not create an unsupported value', () => {
      expect(() => {
        Value.create({
          kind: 'UnsupportedValue' as ValueKind,
          name: 'start'
        } as ValueSpec, $enum);
      }).toThrowError('unsupported value kind');
    });
  });
});
