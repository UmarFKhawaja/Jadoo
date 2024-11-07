import { Identifier } from '@jadoo/core-library';
import { DoubleAttribute, DoubleAttributeSpec } from '..';
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

  describe('toJSON', () => {
    it('returns DoubleAttributeSpec', () => {
      const doubleAttribute: DoubleAttribute = DoubleAttribute.create({
        kind: 'DoubleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const doubleAttributeSpec: DoubleAttributeSpec = doubleAttribute.toJSON();

      expect(doubleAttributeSpec).toEqual({
        kind: 'DoubleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      });
    });
  });
});
