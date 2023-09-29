import { Identifier } from '@jadoo/core-library';
import { JSONAttribute } from '..';
import { Entity } from '../../Entity';
import { Schema } from '../../Schema';

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance'
});

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
});
