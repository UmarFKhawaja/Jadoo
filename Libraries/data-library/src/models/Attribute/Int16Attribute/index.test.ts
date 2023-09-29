import { Identifier } from '@jadoo/core-library';
import { Int16Attribute, IntegerSequence } from '..';
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

describe('Int16Attribute', () => {
  describe('create', () => {
    it('creates a int-16 attribute with default sequence', () => {
      const int16Attribute: Int16Attribute = Int16Attribute.create({
        kind: 'Int16Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(int16Attribute).toBeInstanceOf(Int16Attribute);
      expect(int16Attribute.name).toBeInstanceOf(Identifier);
      expect(int16Attribute.name.paramCase).toEqual('value');
      expect(int16Attribute.isPrimary).toEqual(false);
      expect(int16Attribute.isNullable).toEqual(true);
      expect(int16Attribute.width).toEqual(16);
      expect(int16Attribute.sequence).toEqual(IntegerSequence.NONE);
    });

    it('creates a int-16 attribute with specified sequence', () => {
      const int16Attribute: Int16Attribute = Int16Attribute.create({
        kind: 'Int16Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'INCREMENT'
      }, entity);

      expect(int16Attribute).toBeInstanceOf(Int16Attribute);
      expect(int16Attribute.name).toBeInstanceOf(Identifier);
      expect(int16Attribute.name.paramCase).toEqual('value');
      expect(int16Attribute.isPrimary).toEqual(false);
      expect(int16Attribute.isNullable).toEqual(true);
      expect(int16Attribute.width).toEqual(16);
      expect(int16Attribute.sequence).toEqual(IntegerSequence.INCREMENT);
    });

    it('does not create a int-16 attribute without a name', () => {
      expect(() => {
        Int16Attribute.create({
          kind: 'Int16Attribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
