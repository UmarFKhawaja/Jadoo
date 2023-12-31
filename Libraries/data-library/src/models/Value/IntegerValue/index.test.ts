import { IntegerValue, IntegerValueSpec } from '..';
import { Enum } from '../../Enum';
import { Schema } from '../../Schema';
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

describe('IntegerValue', () => {
  describe('value', () => {
    it('returns the value', () => {
      const integerValue: IntegerValue = IntegerValue.create({
        kind: 'IntegerValue',
        name: 'red',
        value: 0x00FF0000
      }, $enum);

      expect(integerValue.value).toEqual(0x00FF0000);
    });
  });

  describe('create', () => {
    it('creates an integer value', () => {
      const integerValue: IntegerValue = IntegerValue.create({
        kind: 'IntegerValue',
        name: 'red',
        value: 0x00FF0000
      }, $enum);

      expect(integerValue).toBeInstanceOf(IntegerValue);
    });

    it('does not create without name', () => {
      expect(() => {
        IntegerValue.create({
          kind: 'IntegerValue',
          name: '',
          value: 0x00FF0000
        }, $enum);
      }).toThrowError('invalid value');
    });

    it('does not create without an integer value', () => {
      expect(() => {
        IntegerValue.create({
          kind: 'IntegerValue',
          name: 'red',
          value: null as unknown as number
        }, $enum);
      }).toThrowError('invalid value');
    });
  });

  describe('toJSON', () => {
    it('returns IntegerValueSpec', () => {
      const integerValue: IntegerValue = IntegerValue.create({
        kind: 'IntegerValue',
        name: 'red',
        value: 0x00FF0000
      }, $enum);

      const integerValueSpec: IntegerValueSpec = integerValue.toJSON();

      expect(integerValueSpec).toEqual({
        kind: 'IntegerValue',
        name: 'red',
        value: 16711680
      });
    });
  });
});
