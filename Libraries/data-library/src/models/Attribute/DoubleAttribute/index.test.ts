import { Identifier } from '@jadoo/core-library';
import { DoubleAttribute } from '..';
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

describe('DoubleAttribute', () => {
  describe('create', () => {
    it('creates a double attribute', () => {
      const doubleAttribute: DoubleAttribute = DoubleAttribute.create({
        kind: 'DoubleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(doubleAttribute).toBeInstanceOf(DoubleAttribute);
      expect(doubleAttribute.name).toBeInstanceOf(Identifier);
      expect(doubleAttribute.name.paramCase).toEqual('value');
      expect(doubleAttribute.isPrimary).toEqual(false);
      expect(doubleAttribute.isNullable).toEqual(true);
      expect(doubleAttribute.width).toEqual(64);
    });

    it('does not create a double attribute without a name', () => {
      expect(() => {
        DoubleAttribute.create({
          kind: 'DoubleAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
