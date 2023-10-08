import { Identifier, Title } from '@jadoo/core-library';
import { EntityAttribute } from '..';
import { Entity } from '../../Entity';
import { EntityReference } from '../../Reference';
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

describe('EntityAttribute', () => {
  describe('create', () => {
    it('creates a JSON attribute', () => {
      const entityAttribute: EntityAttribute = EntityAttribute.create({
        kind: 'EntityAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        entity: {
          kind: 'EntityReference',
          name: ['account', 'finance', 'jadoo']
        }
      }, entity);

      expect(entityAttribute).toBeInstanceOf(EntityAttribute);
      expect(entityAttribute.name).toBeInstanceOf(Identifier);
      expect(entityAttribute.name.paramCase).toEqual('value');
      expect(entityAttribute.isPrimary).toEqual(false);
      expect(entityAttribute.isNullable).toEqual(true);
      expect(entityAttribute.entityReference).toBeInstanceOf(EntityReference);
      expect(entityAttribute.entityReference.name).toBeInstanceOf(Title);
      expect(entityAttribute.entityReference.name.singular).toBeInstanceOf(Identifier);
      expect(entityAttribute.entityReference.name.singular.paramCase).toEqual('account');
      expect(entityAttribute.entityReference.name.plural).toBeInstanceOf(Identifier);
      expect(entityAttribute.entityReference.name.plural.paramCase).toEqual('accounts');
    });

    it('does not create an entity attribute without a name', () => {
      expect(() => {
        EntityAttribute.create({
          kind: 'EntityAttribute',
          name: '',
          entity: {
            kind: 'EntityReference',
            name: ['account', 'finance', 'jadoo']
          }
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
