import { Identifier, Title } from '@jadoo/core-library';
import { EnumAttribute } from '..';
import { Entity } from '../../Entity';
import { EnumReference } from '../../Reference';
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

describe('EnumAttribute', () => {
  describe('create', () => {
    it('creates a JSON attribute', () => {
      const enumAttribute: EnumAttribute = EnumAttribute.create({
        kind: 'EnumAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        enum: {
          kind: 'EnumReference',
          name: ['account-type', 'finance']
        }
      }, entity);

      expect(enumAttribute).toBeInstanceOf(EnumAttribute);
      expect(enumAttribute.name).toBeInstanceOf(Identifier);
      expect(enumAttribute.name.paramCase).toEqual('value');
      expect(enumAttribute.isPrimary).toEqual(false);
      expect(enumAttribute.isNullable).toEqual(true);
      expect(enumAttribute.enumReference).toBeInstanceOf(EnumReference);
      expect(enumAttribute.enumReference.name).toBeInstanceOf(Title);
      expect(enumAttribute.enumReference.name.singular).toBeInstanceOf(Identifier);
      expect(enumAttribute.enumReference.name.singular.paramCase).toEqual('account-type');
      expect(enumAttribute.enumReference.name.plural).toBeInstanceOf(Identifier);
      expect(enumAttribute.enumReference.name.plural.paramCase).toEqual('account-types');
    });

    it('does not create am enum attribute without a name', () => {
      expect(() => {
        EnumAttribute.create({
          kind: 'EnumAttribute',
          name: '',
          enum: {
            kind: 'EnumReference',
            name: ['account-type', 'finance']
          }
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
