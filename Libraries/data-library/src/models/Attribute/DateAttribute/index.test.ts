import { Identifier } from '@jadoo/core-library';
import { DateAttribute, DateAttributeSpec } from '..';
import { DEFAULT_DATE_FORMAT } from '../../../constants';
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

describe('DateAttribute', () => {
  describe('create', () => {
    it('creates a date attribute with default format', () => {
      const dateAttribute: DateAttribute = DateAttribute.create({
        kind: 'DateAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(dateAttribute).toBeInstanceOf(DateAttribute);
      expect(dateAttribute.name).toBeInstanceOf(Identifier);
      expect(dateAttribute.name.paramCase).toEqual('value');
      expect(dateAttribute.isPrimary).toEqual(false);
      expect(dateAttribute.isNullable).toEqual(true);
      expect(dateAttribute.format).toEqual(DEFAULT_DATE_FORMAT);
    });

    it('creates a date attribute with specified format', () => {
      const DATE_FORMAT: string = 'dd-MM-YY';

      const dateAttribute: DateAttribute = DateAttribute.create({
        kind: 'DateAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: DATE_FORMAT
      }, entity);

      expect(dateAttribute).toBeInstanceOf(DateAttribute);
      expect(dateAttribute.name).toBeInstanceOf(Identifier);
      expect(dateAttribute.name.paramCase).toEqual('value');
      expect(dateAttribute.isPrimary).toEqual(false);
      expect(dateAttribute.isNullable).toEqual(true);
      expect(dateAttribute.format).toEqual(DATE_FORMAT);
    });

    it('does not create a date attribute without a name', () => {
      expect(() => {
        DateAttribute.create({
          kind: 'DateAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns DateAttributeSpec', () => {
      const dateAttribute: DateAttribute = DateAttribute.create({
        kind: 'DateAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const dateAttributeSpec: DateAttributeSpec = dateAttribute.toJSON();

      expect(dateAttributeSpec).toEqual({
        kind: 'DateAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: DEFAULT_DATE_FORMAT
      });
    });
  });
});
