import { Identifier } from '@jadoo/core-library';
import { Attribute, AttributeKind, AttributeSpec, Entity, Schema } from '..';

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

describe('Attribute', () => {
  describe('create', () => {
    it('creates a boolean attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'BooleanAttribute',
        name: 'isDeleted',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('is-deleted');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(true);
    });

    it('creates a int-8 attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'Int8Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a int-16 attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'Int16Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a int-32 attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'Int32Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a int-64 attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'Int64Attribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a single attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'SingleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a double attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'DoubleAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a decimal attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'DecimalAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a string attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'StringAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a date attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'DateAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a time attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'TimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a date-time attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'DateTimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a timestamp attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'TimestampAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a JSON attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'JSONAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates a UUID attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'UUIDAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates an enum attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'EnumAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false,
        enum: {
          kind: 'EnumReference',
          name: ['account-type', 'finance']
        }
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('creates an entity attribute', () => {
      const attribute: Attribute = Attribute.create({
        kind: 'EntityAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: false,
        entity: {
          kind: 'EntityReference',
          name: ['account', 'finance']
        }
      }, entity);

      expect(attribute).toBeInstanceOf(Attribute);
      expect(attribute.name).toBeInstanceOf(Identifier);
      expect(attribute.name.paramCase).toEqual('value');
      expect(attribute.isPrimary).toEqual(false);
      expect(attribute.isNullable).toEqual(false);
    });

    it('does not create an unknown attribute', () => {
      expect(() => {
        Attribute.create({
          kind: 'UnknownAttribute' as AttributeKind,
          name: 'value',
          isPrimary: false,
          isNullable: false
        } as AttributeSpec, entity);
      }).toThrowError('unsupported attribute kind');
    });
  });
});
