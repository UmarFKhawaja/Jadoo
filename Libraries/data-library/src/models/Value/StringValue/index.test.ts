import { StringValue, StringValueSpec } from '..';
import { Schema } from '../../Schema';
import { Enum } from '../../Enum';
import { Solution } from '../../Solution';

const solution: Solution = Solution.create({
  kind: 'Solution',
  name: 'Jadoo',
  schemas: []
});

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance',
  entities: [],
  enums: []
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

describe('StringValue', () => {
  describe('value', () => {
    it('returns the value', () => {
      const stringValue: StringValue = StringValue.create({
        kind: 'StringValue',
        name: 'credit',
        value: 'credit'
      }, $enum);

      expect(stringValue.value).toEqual('CREDIT');
    });
  });

  describe('create', () => {
    it('creates an string value', () => {
      const stringValue: StringValue = StringValue.create({
        kind: 'StringValue',
        name: 'credit',
        value: 'credit'
      }, $enum);

      expect(stringValue).toBeInstanceOf(StringValue);
    });

    it('does not create without a name', () => {
      expect(() => {
        StringValue.create({
          kind: 'StringValue',
          name: '',
          value: 'credit'
        }, $enum);
      }).toThrowError('invalid value');
    });

    it('does not create without a string value', () => {
      expect(() => {
        StringValue.create({
          kind: 'StringValue',
          name: 'credit',
          value: 0 as unknown as string
        }, $enum);
      }).toThrowError('invalid value');
    });
  });

  describe('toJSON', () => {
    it('returns StringValueSpec', () => {
      const stringValue: StringValue = StringValue.create({
        kind: 'StringValue',
        name: 'credit',
        value: 'credit'
      }, $enum);

      const stringValueSpec: StringValueSpec = stringValue.toJSON();

      expect(stringValueSpec).toEqual({
        kind: 'StringValue',
        name: 'credit',
        value: 'CREDIT'
      });
    });
  });
});
