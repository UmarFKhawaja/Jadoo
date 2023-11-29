import { Identifier } from '@jadoo/core-library';
import { SingleAttribute, SingleAttributeSpec } from '..';
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

describe('SingleAttribute', () => {
  describe('create', () => {
    it('creates a single attribute', () => {
      const singleAttribute: SingleAttribute = SingleAttribute.create({
        kind: 'SingleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(singleAttribute).toBeInstanceOf(SingleAttribute);
      expect(singleAttribute.name).toBeInstanceOf(Identifier);
      expect(singleAttribute.name.paramCase).toEqual('value');
      expect(singleAttribute.isPrimary).toEqual(false);
      expect(singleAttribute.isNullable).toEqual(true);
      expect(singleAttribute.width).toEqual(32);
    });

    it('does not create a single attribute without a name', () => {
      expect(() => {
        SingleAttribute.create({
          kind: 'SingleAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns SingleAttributeSpec', () => {
      const singleAttribute: SingleAttribute = SingleAttribute.create({
        kind: 'SingleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const singleAttributeSpec: SingleAttributeSpec = singleAttribute.toJSON();

      expect(singleAttributeSpec).toEqual({
        kind: 'SingleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      });
    });
  });
});
