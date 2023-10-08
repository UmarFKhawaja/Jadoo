import { Identifier } from '@jadoo/core-library';
import { StringAttribute } from '..';
import { MAX_STRING_LENGTH, MIN_STRING_LENGTH } from '../../../constants';
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

describe('StringAttribute', () => {
  describe('create', () => {
    it('creates a string attribute with default length', () => {
      const stringAttribute: StringAttribute = StringAttribute.create({
        kind: 'StringAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(stringAttribute).toBeInstanceOf(StringAttribute);
      expect(stringAttribute.name).toBeInstanceOf(Identifier);
      expect(stringAttribute.name.paramCase).toEqual('value');
      expect(stringAttribute.isPrimary).toEqual(false);
      expect(stringAttribute.isNullable).toEqual(true);
      expect(stringAttribute.length).toEqual(64);
    });

    it('creates a string attribute with specified length', () => {
      const stringAttribute: StringAttribute = StringAttribute.create({
        kind: 'StringAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        length: 32
      }, entity);

      expect(stringAttribute).toBeInstanceOf(StringAttribute);
      expect(stringAttribute.name).toBeInstanceOf(Identifier);
      expect(stringAttribute.name.paramCase).toEqual('value');
      expect(stringAttribute.isPrimary).toEqual(false);
      expect(stringAttribute.isNullable).toEqual(true);
      expect(stringAttribute.length).toEqual(32);
    });

    it('does not create a string attribute without a name', () => {
      expect(() => {
        StringAttribute.create({
          kind: 'StringAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });

    it('does not create a string attribute with a length below MIN_STRING_LENGTH', () => {
      expect(() => {
        StringAttribute.create({
          kind: 'StringAttribute',
          name: 'value',
          length: MIN_STRING_LENGTH - 10
        }, entity);
      }).toThrowError('invalid attribute');
    });

    it('does not create a string attribute with a length above MAX_STRING_LENGTH', () => {
      expect(() => {
        StringAttribute.create({
          kind: 'StringAttribute',
          name: 'value',
          length: MAX_STRING_LENGTH + 10
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
