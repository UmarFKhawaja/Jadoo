import { Title } from '@jadoo/core-library';
import { Entity } from '.';
import { Attribute } from '../Attribute';
import { Schema } from '../Schema';

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance'
});

describe('Entity', () => {
  describe('create', () => {
    it('creates an entity', () => {
      const entity: Entity = Entity.create({
        kind: 'Entity',
        name: 'user',
        attributes: [
          {
            kind: 'UUIDAttribute',
            name: 'id'
          }
        ]
      }, schema);

      expect(entity).toBeInstanceOf(Entity);
    });

    it('does not create entity without a name', () => {
      expect(() => {
        Entity.create({
          kind: 'Entity',
          name: '',
          attributes: [
            {
              kind: 'UUIDAttribute',
              name: 'id'
            }
          ]
        }, schema);
      }).toThrowError('invalid entity');
    });

    it('does not create entity without attributes', () => {
      expect(() => {
        Entity.create({
          kind: 'Entity',
          name: 'account',
          attributes: []
        }, schema);
      }).toThrowError('invalid entity');
    });
  });

  describe('name', () => {
    it('returns a Title', () => {
      const entity: Entity = Entity.create({
        kind: 'Entity',
        name: 'user',
        attributes: [
          {
            kind: 'UUIDAttribute',
            name: 'id',
            isPrimary: true,
            sequence: 'UUID'
          },
          {
            kind: 'StringAttribute',
            name: 'name'
          }
        ]
      }, schema);

      expect(entity.name).toBeInstanceOf(Title);
      expect(entity.name.singular.paramCase).toEqual('user');
      expect(entity.name.plural.paramCase).toEqual('users');
    });
  });

  describe('attributes', () => {
    it('returns a read-only array', () => {
      const entity: Entity = Entity.create({
        kind: 'Entity',
        name: 'user',
        attributes: [
          {
            kind: 'UUIDAttribute',
            name: 'id',
            isPrimary: true,
            sequence: 'UUID'
          },
          {
            kind: 'StringAttribute',
            name: 'name'
          }
        ]
      }, schema);

      const attributes: Attribute[] = entity.attributes;

      attributes.push(Attribute.create({
        kind: 'StringAttribute',
        name: 'description',
        isNullable: true
      }, entity));

      expect(attributes.length).toEqual(3);
      expect(entity.attributes.length).toEqual(2);
    });
  });
});
