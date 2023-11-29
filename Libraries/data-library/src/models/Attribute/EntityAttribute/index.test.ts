import { Identifier, Title } from '@jadoo/core-library';
import { EntityArity, EntityAttribute, EntityAttributeSpec } from '..';
import { Entity } from '../../Entity';
import { EntityReference } from '../../Reference';
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

describe('EntityAttribute', () => {
  describe('create', () => {
    it('creates a JSON attribute', () => {
      const entityAttribute: EntityAttribute = EntityAttribute.create({
        kind: 'EntityAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        reference: {
          kind: 'EntityReference',
          name: ['account', 'finance', 'jadoo']
        },
        arity: EntityArity.ONE_TO_MANY
      }, entity);

      expect(entityAttribute).toBeInstanceOf(EntityAttribute);
      expect(entityAttribute.name).toBeInstanceOf(Identifier);
      expect(entityAttribute.name.paramCase).toEqual('value');
      expect(entityAttribute.isPrimary).toEqual(false);
      expect(entityAttribute.isNullable).toEqual(true);
      expect(entityAttribute.reference).toBeInstanceOf(EntityReference);
      expect(entityAttribute.reference.name).toBeInstanceOf(Title);
      expect(entityAttribute.reference.name.singular).toBeInstanceOf(Identifier);
      expect(entityAttribute.reference.name.singular.paramCase).toEqual('account');
      expect(entityAttribute.reference.name.plural).toBeInstanceOf(Identifier);
      expect(entityAttribute.reference.name.plural.paramCase).toEqual('accounts');
      expect(entityAttribute.arity).toEqual(EntityArity.ONE_TO_MANY);
    });

    it('does not create an entity attribute without a name', () => {
      expect(() => {
        EntityAttribute.create({
          kind: 'EntityAttribute',
          name: '',
          reference: {
            kind: 'EntityReference',
            name: ['account', 'finance', 'jadoo']
          },
          arity: EntityArity.ONE_TO_MANY
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns EntityAttributeSpec', () => {
      const entityAttribute: EntityAttribute = EntityAttribute.create({
        kind: 'EntityAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        reference: {
          kind: 'EntityReference',
          name: ['account', 'finance', 'jadoo']
        },
        arity: EntityArity.MANY_TO_MANY
      }, entity);

      const entityAttributeSpec: EntityAttributeSpec = entityAttribute.toJSON();

      expect(entityAttributeSpec).toEqual({
        kind: 'EntityAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        reference: {
          kind: 'EntityReference',
          name: ['account', 'finance', 'jadoo']
        },
        arity: EntityArity.MANY_TO_MANY
      });
    });
  });
});
