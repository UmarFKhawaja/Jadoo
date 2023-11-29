import { Identifier, Title } from '@jadoo/core-library';
import { EnumReference, EnumReferenceSpec, SchemaReference } from '..';

describe('EnumReference', () => {
  describe('create', () => {
    it('creates an enum reference', () => {
      const enumReference: EnumReference = EnumReference.create({
        kind: 'EnumReference',
        name: ['account-type', 'finance', 'jadoo']
      });

      expect(enumReference).toBeInstanceOf(EnumReference);
      expect(enumReference.name).toBeInstanceOf(Title);
      expect(enumReference.name.singular).toBeInstanceOf(Identifier);
      expect(enumReference.name.singular.paramCase).toEqual('account-type');
      expect(enumReference.name.plural).toBeInstanceOf(Identifier);
      expect(enumReference.name.plural.paramCase).toEqual('account-types');
      expect(enumReference.schema).toBeInstanceOf(SchemaReference);
      expect(enumReference.schema.name).toBeInstanceOf(Identifier);
      expect(enumReference.schema.name.paramCase).toEqual('finance');
    });

    it('does not create an enum reference without a name', () => {
      expect(() => {
        EnumReference.create({
          kind: 'EnumReference',
          name: ['', 'finance', 'jadoo']
        });
      }).toThrowError('invalid enum reference');
    });

    it('does not create an enum reference without a schema', () => {
      expect(() => {
        EnumReference.create({
          kind: 'EnumReference',
          name: ['account-type', '', 'jadoo']
        });
      }).toThrowError('invalid enum reference');
    });

    it('does not create an enum reference without a solution', () => {
      expect(() => {
        EnumReference.create({
          kind: 'EnumReference',
          name: ['account-type', 'finance', '']
        });
      }).toThrowError('invalid enum reference');
    });
  });

  describe('toJSON', () => {
    it('returns EnumReferenceSpec', () => {
      const enumReference: EnumReference = EnumReference.create({
        kind: 'EnumReference',
        name: ['account-type', 'finance', 'jadoo']
      });

      const enumReferenceSpec: EnumReferenceSpec = enumReference.toJSON();

      expect(enumReferenceSpec).toEqual({
        kind: 'EnumReference',
        name: ['account-type', 'finance', 'jadoo']
      });
    });
  });
});
