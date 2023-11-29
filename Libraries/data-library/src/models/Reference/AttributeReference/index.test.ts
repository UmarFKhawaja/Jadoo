import { Identifier, Title } from '@jadoo/core-library';
import { AttributeReference, AttributeReferenceSpec, EntityReference, SchemaReference } from '..';

describe('AttributeReference', () => {
  describe('create', () => {
    it('creates an attribute reference', () => {
      const attributeReference: AttributeReference = AttributeReference.create({
        kind: 'AttributeReference',
        name: ['id', 'account', 'finance', 'jadoo']
      });

      expect(attributeReference).toBeInstanceOf(AttributeReference);
      expect(attributeReference.name).toBeInstanceOf(Identifier);
      expect(attributeReference.name.paramCase).toEqual('id');
      expect(attributeReference.entity).toBeInstanceOf(EntityReference);
      expect(attributeReference.entity.name).toBeInstanceOf(Title);
      expect(attributeReference.entity.name.singular).toBeInstanceOf(Identifier);
      expect(attributeReference.entity.name.singular.paramCase).toEqual('account');
      expect(attributeReference.entity.name.plural).toBeInstanceOf(Identifier);
      expect(attributeReference.entity.name.plural.paramCase).toEqual('accounts');
      expect(attributeReference.entity.schema).toBeInstanceOf(SchemaReference);
      expect(attributeReference.entity.schema.name).toBeInstanceOf(Identifier);
      expect(attributeReference.entity.schema.name.paramCase).toEqual('finance');
    });

    it('does not create an attribute reference without a name', () => {
      expect(() => {
        AttributeReference.create({
          kind: 'AttributeReference',
          name: ['', 'account', 'finance', 'jadoo']
        });
      }).toThrowError('invalid attribute reference');
    });

    it('does not create an attribute reference without an entity', () => {
      expect(() => {
        AttributeReference.create({
          kind: 'AttributeReference',
          name: ['id', '', 'finance', 'jadoo']
        });
      }).toThrowError('invalid attribute reference');
    });

    it('does not create an attribute reference without a schema', () => {
      expect(() => {
        AttributeReference.create({
          kind: 'AttributeReference',
          name: ['id', 'account', '', 'jadoo']
        });
      }).toThrowError('invalid attribute reference');
    });

    it('does not create an attribute reference without a solution', () => {
      expect(() => {
        AttributeReference.create({
          kind: 'AttributeReference',
          name: ['id', 'account', 'finance', '']
        });
      }).toThrowError('invalid attribute reference');
    });
  });

  describe('toJSON', () => {
    it('returns AttributeReferenceSpec', () => {
      const attributeReference: AttributeReference = AttributeReference.create({
        kind: 'AttributeReference',
        name: ['id', 'account', 'finance', 'jadoo']
      });

      const attributeReferenceSpec: AttributeReferenceSpec = attributeReference.toJSON();

      expect(attributeReferenceSpec).toEqual({
        kind: 'AttributeReference',
        name: ['id', 'account', 'finance', 'jadoo']
      });
    });
  });
});
