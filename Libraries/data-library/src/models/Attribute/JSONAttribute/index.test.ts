import { Identifier } from '@jadoo/core-library';
import { JSONAttribute, JSONAttributeSpec } from '..';
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

describe('JSONAttribute', () => {
  describe('create', () => {
    it('creates a JSON attribute', () => {
      const jsonAttribute: JSONAttribute = JSONAttribute.create({
        kind: 'JSONAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(jsonAttribute).toBeInstanceOf(JSONAttribute);
      expect(jsonAttribute.name).toBeInstanceOf(Identifier);
      expect(jsonAttribute.name.paramCase).toEqual('value');
      expect(jsonAttribute.isPrimary).toEqual(false);
      expect(jsonAttribute.isNullable).toEqual(true);
    });

    it('does not create a JSON attribute without a name', () => {
      expect(() => {
        JSONAttribute.create({
          kind: 'JSONAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns JSONAttributeSpec', () => {
      const jsonAttribute: JSONAttribute = JSONAttribute.create({
        kind: 'JSONAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const jsonAttributeSpec: JSONAttributeSpec = jsonAttribute.toJSON();

      expect(jsonAttributeSpec).toEqual({
        kind: 'JSONAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      });
    });
  });
});
