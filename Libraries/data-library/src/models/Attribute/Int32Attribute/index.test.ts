import { Identifier } from '@jadoo/core-library';
import { Int32Attribute, Int32AttributeSpec, IntegerSequence } from '..';
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

describe('Int32Attribute', () => {
  describe('create', () => {
    it('creates a int-32 attribute with default sequence', () => {
      const int32Attribute: Int32Attribute = Int32Attribute.create({
        kind: 'Int32Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(int32Attribute).toBeInstanceOf(Int32Attribute);
      expect(int32Attribute.name).toBeInstanceOf(Identifier);
      expect(int32Attribute.name.paramCase).toEqual('value');
      expect(int32Attribute.isPrimary).toEqual(false);
      expect(int32Attribute.isNullable).toEqual(true);
      expect(int32Attribute.width).toEqual(32);
      expect(int32Attribute.sequence).toEqual(IntegerSequence.NONE);
    });

    it('creates a int-32 attribute with specified sequence', () => {
      const int32Attribute: Int32Attribute = Int32Attribute.create({
        kind: 'Int32Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'INCREMENT'
      }, entity);

      expect(int32Attribute).toBeInstanceOf(Int32Attribute);
      expect(int32Attribute.name).toBeInstanceOf(Identifier);
      expect(int32Attribute.name.paramCase).toEqual('value');
      expect(int32Attribute.isPrimary).toEqual(false);
      expect(int32Attribute.isNullable).toEqual(true);
      expect(int32Attribute.width).toEqual(32);
      expect(int32Attribute.sequence).toEqual(IntegerSequence.INCREMENT);
    });

    it('does not create a int-32 attribute without a name', () => {
      expect(() => {
        Int32Attribute.create({
          kind: 'Int32Attribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns Int32AttributeSpec', () => {
      const int32Attribute: Int32Attribute = Int32Attribute.create({
        kind: 'Int32Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const int32AttributeSpec: Int32AttributeSpec = int32Attribute.toJSON();

      expect(int32AttributeSpec).toEqual({
        kind: 'Int32Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'NONE'
      });
    });
  });
});
