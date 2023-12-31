import { Identifier } from '@jadoo/core-library';
import { DateTimeAttribute, DateTimeAttributeSpec } from '..';
import { DEFAULT_DATE_TIME_FORMAT } from '../../../constants';
import { Entity } from '../../Entity';
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

const entity: Entity = Entity.create({
  kind: 'Entity',
  name: 'account',
  attributes: [
    {
      kind: 'UUIDAttribute',
      name: 'id',
      isPrimary: true,
      sequence: 'UUID'
    }
  ]
}, schema);

describe('DateTimeAttribute', () => {
  describe('create', () => {
    it('creates a date-time attribute with default format', () => {
      const dateTimeAttribute: DateTimeAttribute = DateTimeAttribute.create({
        kind: 'DateTimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(dateTimeAttribute).toBeInstanceOf(DateTimeAttribute);
      expect(dateTimeAttribute.name).toBeInstanceOf(Identifier);
      expect(dateTimeAttribute.name.paramCase).toEqual('value');
      expect(dateTimeAttribute.isPrimary).toEqual(false);
      expect(dateTimeAttribute.isNullable).toEqual(true);
      expect(dateTimeAttribute.format).toEqual(DEFAULT_DATE_TIME_FORMAT);
    });

    it('creates a date-time attribute with specified format', () => {
      const DATE_TIME_FORMAT: string = 'dd-MM-YY HH:mm';

      const dateTimeAttribute: DateTimeAttribute = DateTimeAttribute.create({
        kind: 'DateTimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: DATE_TIME_FORMAT
      }, entity);

      expect(dateTimeAttribute).toBeInstanceOf(DateTimeAttribute);
      expect(dateTimeAttribute.name).toBeInstanceOf(Identifier);
      expect(dateTimeAttribute.name.paramCase).toEqual('value');
      expect(dateTimeAttribute.isPrimary).toEqual(false);
      expect(dateTimeAttribute.isNullable).toEqual(true);
      expect(dateTimeAttribute.format).toEqual(DATE_TIME_FORMAT);
    });

    it('does not create a date-time attribute without a name', () => {
      expect(() => {
        DateTimeAttribute.create({
          kind: 'DateTimeAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns DateTimeAttributeSpec', () => {
      const dateTimeAttribute: DateTimeAttribute = DateTimeAttribute.create({
        kind: 'DateTimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const dateTimeAttributeSpec: DateTimeAttributeSpec = dateTimeAttribute.toJSON();

      expect(dateTimeAttributeSpec).toEqual({
        kind: 'DateTimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: DEFAULT_DATE_TIME_FORMAT
      });
    });
  });
});
