import { UndefinedValue } from '..';
import { Schema } from '../../Schema';
import { Enum } from '../../Enum';
import { Solution } from '../../Solution';

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

describe('UndefinedValue', () => {
  describe('create', () => {
    it('creates an undefined value', () => {
      const undefinedValue: UndefinedValue = UndefinedValue.create({
        kind: 'UndefinedValue',
        name: 'start'
      }, $enum);

      expect(undefinedValue).toBeInstanceOf(UndefinedValue);
    });

    it('does not create without a name', () => {
      expect(() => {
        UndefinedValue.create({
          kind: 'UndefinedValue',
          name: ''
        }, $enum);
      }).toThrowError('invalid value');
    });
  });
});
