import { Identifier } from '@jadoo/core-library';
import { Int8Attribute, Int8AttributeSpec, IntegerSequence } from '..';
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

describe('Int8Attribute', () => {
  describe('create', () => {
    it('creates a int-8 attribute with default sequence', () => {
      const int8Attribute: Int8Attribute = Int8Attribute.create({
        kind: 'Int8Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(int8Attribute).toBeInstanceOf(Int8Attribute);
      expect(int8Attribute.name).toBeInstanceOf(Identifier);
      expect(int8Attribute.name.paramCase).toEqual('value');
      expect(int8Attribute.isPrimary).toEqual(false);
      expect(int8Attribute.isNullable).toEqual(true);
      expect(int8Attribute.width).toEqual(8);
      expect(int8Attribute.sequence).toEqual(IntegerSequence.NONE);
    });

    it('creates a int-8 attribute with specified sequence', () => {
      const int8Attribute: Int8Attribute = Int8Attribute.create({
        kind: 'Int8Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'INCREMENT'
      }, entity);

      expect(int8Attribute).toBeInstanceOf(Int8Attribute);
      expect(int8Attribute.name).toBeInstanceOf(Identifier);
      expect(int8Attribute.name.paramCase).toEqual('value');
      expect(int8Attribute.isPrimary).toEqual(false);
      expect(int8Attribute.isNullable).toEqual(true);
      expect(int8Attribute.width).toEqual(8);
      expect(int8Attribute.sequence).toEqual(IntegerSequence.INCREMENT);
    });

    it('does not create a int-8 attribute without a name', () => {
      expect(() => {
        Int8Attribute.create({
          kind: 'Int8Attribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns Int8AttributeSpec', () => {
      const int8Attribute: Int8Attribute = Int8Attribute.create({
        kind: 'Int8Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const int8AttributeSpec: Int8AttributeSpec = int8Attribute.toJSON();

      expect(int8AttributeSpec).toEqual({
        kind: 'Int8Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'NONE'
      });
    });
  });
});
