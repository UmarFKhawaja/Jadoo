import { Identifier } from '@jadoo/core-library';
import { UUIDAttribute, UUIDAttributeSpec, UUIDSequence } from '..';
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

describe('UUIDAttribute', () => {
  describe('create', () => {
    it('creates a UUID attribute', () => {
      const uuidAttribute: UUIDAttribute = UUIDAttribute.create({
        kind: 'UUIDAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(uuidAttribute).toBeInstanceOf(UUIDAttribute);
      expect(uuidAttribute.name).toBeInstanceOf(Identifier);
      expect(uuidAttribute.name.paramCase).toEqual('value');
      expect(uuidAttribute.isPrimary).toEqual(false);
      expect(uuidAttribute.isNullable).toEqual(true);
      expect(uuidAttribute.sequence).toEqual(UUIDSequence.NONE);
    });

    it('does not create a UUID attribute without a name', () => {
      expect(() => {
        UUIDAttribute.create({
          kind: 'UUIDAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns UUIDAttributeSpec', () => {
      const uuidAttribute: UUIDAttribute = UUIDAttribute.create({
        kind: 'UUIDAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const uuidAttributeSpec: UUIDAttributeSpec = uuidAttribute.toJSON();

      expect(uuidAttributeSpec).toEqual({
        kind: 'UUIDAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'NONE'
      });
    });
  });
});
