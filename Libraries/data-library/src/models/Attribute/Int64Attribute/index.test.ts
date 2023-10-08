import { Identifier } from '@jadoo/core-library';
import { Int64Attribute, IntegerSequence } from '..';
import { Entity } from '../../Entity';
import { Schema } from '../../Schema';
import { Solution } from '../../Solution';

const solution: Solution = Solution.create({
  kind: 'Solution',
  name: 'Jadoo'
});

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance'
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

describe('Int64Attribute', () => {
  describe('create', () => {
    it('creates a int-64 attribute with default sequence', () => {
      const int64Attribute: Int64Attribute = Int64Attribute.create({
        kind: 'Int64Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(int64Attribute).toBeInstanceOf(Int64Attribute);
      expect(int64Attribute.name).toBeInstanceOf(Identifier);
      expect(int64Attribute.name.paramCase).toEqual('value');
      expect(int64Attribute.isPrimary).toEqual(false);
      expect(int64Attribute.isNullable).toEqual(true);
      expect(int64Attribute.width).toEqual(64);
      expect(int64Attribute.sequence).toEqual(IntegerSequence.NONE);
    });

    it('creates a int-64 attribute with specified sequence', () => {
      const int64Attribute: Int64Attribute = Int64Attribute.create({
        kind: 'Int64Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        sequence: 'INCREMENT'
      }, entity);

      expect(int64Attribute).toBeInstanceOf(Int64Attribute);
      expect(int64Attribute.name).toBeInstanceOf(Identifier);
      expect(int64Attribute.name.paramCase).toEqual('value');
      expect(int64Attribute.isPrimary).toEqual(false);
      expect(int64Attribute.isNullable).toEqual(true);
      expect(int64Attribute.width).toEqual(64);
      expect(int64Attribute.sequence).toEqual(IntegerSequence.INCREMENT);
    });

    it('does not create a int-8 attribute without a name', () => {
      expect(() => {
        Int64Attribute.create({
          kind: 'Int64Attribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
