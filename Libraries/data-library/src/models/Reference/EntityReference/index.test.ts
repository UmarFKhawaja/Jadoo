import { Identifier, Title } from '@jadoo/core-library';
import { EntityReference, EntityReferenceSpec, SchemaReference } from '..';

describe('EntityReference', () => {
  describe('create', () => {
    it('creates an entity reference', () => {
      const entityReference: EntityReference = EntityReference.create({
        kind: 'EntityReference',
        name: ['account', 'finance', 'jadoo']
      });

      expect(entityReference).toBeInstanceOf(EntityReference);
      expect(entityReference.name).toBeInstanceOf(Title);
      expect(entityReference.name.singular).toBeInstanceOf(Identifier);
      expect(entityReference.name.singular.paramCase).toEqual('account');
      expect(entityReference.name.plural).toBeInstanceOf(Identifier);
      expect(entityReference.name.plural.paramCase).toEqual('accounts');
      expect(entityReference.schema).toBeInstanceOf(SchemaReference);
      expect(entityReference.schema.name).toBeInstanceOf(Identifier);
      expect(entityReference.schema.name.paramCase).toEqual('finance');
    });

    it('does not create an entity reference without a name', () => {
      expect(() => {
        EntityReference.create({
          kind: 'EntityReference',
          name: ['', 'finance', 'jadoo']
        });
      }).toThrowError('invalid entity reference');
    });

    it('does not create an entity reference without a schema', () => {
      expect(() => {
        EntityReference.create({
          kind: 'EntityReference',
          name: ['account', '', 'jadoo']
        });
      }).toThrowError('invalid entity reference');
    });

    it('does not create an entity reference without a solution', () => {
      expect(() => {
        EntityReference.create({
          kind: 'EntityReference',
          name: ['account', 'finance', '']
        });
      }).toThrowError('invalid entity reference');
    });
  });

  describe('toJSON', () => {
    it('returns EntityReferenceSpec', () => {
      const entityReference: EntityReference = EntityReference.create({
        kind: 'EntityReference',
        name: ['account', 'finance', 'jadoo']
      });

      const entityReferenceSpec: EntityReferenceSpec = entityReference.toJSON();

      expect(entityReferenceSpec).toEqual({
        kind: 'EntityReference',
        name: ['account', 'finance', 'jadoo']
      });
    });
  });
});
