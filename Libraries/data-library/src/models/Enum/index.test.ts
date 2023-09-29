import { Title } from '@jadoo/core-library';
import { Enum } from '.';
import { Value } from '../Value';
import { Schema } from '../Schema';

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance'
});

describe('Enum', () => {
  describe('create', () => {
    it('creates an enum', () => {
      const $enum: Enum = Enum.create({
        kind: 'Enum',
        name: 'f1-team',
        values: [
          {
            kind: 'UndefinedValue',
            name: 'ferrari'
          }
        ]
      }, schema);

      expect($enum).toBeInstanceOf(Enum);
    });

    it('does not create an enum without a name', () => {
      expect(() => {
        Enum.create({
          kind: 'Enum',
          name: '',
          values: [
            {
              kind: 'UndefinedValue',
              name: 'ferrari'
            }
          ]
        }, schema);
      }).toThrowError('invalid enum');
    });

    it('does not create an enum without values', () => {
      expect(() => {
        Enum.create({
          kind: 'Enum',
          name: 'f1-team',
          values: []
        }, schema);
      }).toThrowError('invalid enum');
    });
  });

  describe('name', () => {
    it('returns a Title', () => {
      const $enum: Enum = Enum.create({
        kind: 'Enum',
        name: 'account-type',
        values: [
          {
            kind: 'UndefinedValue',
            name: 'equity'
          },
          {
            kind: 'UndefinedValue',
            name: 'liability'
          }
        ]
      }, schema);

      expect($enum.name).toBeInstanceOf(Title);
      expect($enum.name.singular.paramCase).toEqual('account-type');
      expect($enum.name.plural.paramCase).toEqual('account-types');
    });
  });

  describe('values', () => {
    it('returns a read-only array', () => {
      const $enum: Enum = Enum.create({
        kind: 'Enum',
        name: 'account-type',
        values: [
          {
            kind: 'UndefinedValue',
            name: 'equity'
          },
          {
            kind: 'UndefinedValue',
            name: 'liability'
          }
        ]
      }, schema);

      const values: Value[] = $enum.values;

      values.push(Value.create({
        kind: 'UndefinedValue',
        name: 'asset'
      }, $enum));

      expect(values.length).toEqual(3);
      expect($enum.values.length).toEqual(2);
    });
  });
});
