import { Identifier } from '@jadoo/core-library';
import { Schema } from '.';
import { Entity } from '../Entity';
import { Enum } from '../Enum';

describe('Schema', () => {
  describe('create', () => {
    it('creates an schema', () => {
      const schema: Schema = Schema.create({
        kind: 'Schema',
        name: 'account',
        entities: [
          {
            kind: 'Entity',
            name: 'account',
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
          },
          {
            kind: 'Entity',
            name: 'transaction',
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
          }
        ],
        enums: [
          {
            kind: 'Enum',
            name: 'account-type',
            values: [
              {
                kind: 'StringValue',
                name: 'debit',
                value: 'debit'
              },
              {
                kind: 'StringValue',
                name: 'credit',
                value: 'credit'
              }
            ]
          }
        ]
      });

      expect(schema).toBeInstanceOf(Schema);
    });

    it('does not create a schema without a name', () => {
      expect(() => {
        Schema.create({
          kind: 'Schema',
          name: ''
        })
      }).toThrowError('invalid schema');
    });
  });

  describe('name', () => {
    it('returns a Title', () => {
      const schema: Schema = Schema.create({
        kind: 'Schema',
        name: 'finance'
      });

      expect(schema.name).toBeInstanceOf(Identifier);
      expect(schema.name.paramCase).toEqual('finance');
    });
  });

  describe('entities', () => {
    it('returns a read-only array', () => {
      const schema: Schema = Schema.create({
        kind: 'Schema',
        name: 'account',
        entities: [
          {
            kind: 'Entity',
            name: 'account',
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
          },
          {
            kind: 'Entity',
            name: 'transaction',
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
          }
        ],
        enums: [
          {
            kind: 'Enum',
            name: 'account-type',
            values: [
              {
                kind: 'StringValue',
                name: 'debit',
                value: 'debit'
              },
              {
                kind: 'StringValue',
                name: 'credit',
                value: 'credit'
              }
            ]
          }
        ]
      });

      const entities: Entity[] = schema.entities;

      entities.push(Entity.create({
        kind: 'Entity',
        name: 'income',
        attributes: [
          {
            kind: 'UUIDAttribute',
            name: 'id'
          }
        ]
      }, schema));

      expect(entities.length).toEqual(3);
      expect(schema.entities.length).toEqual(2);
    });
  });

  describe('enums', () => {
    it('returns a read-only array', () => {
      const schema: Schema = Schema.create({
        kind: 'Schema',
        name: 'account',
        entities: [
          {
            kind: 'Entity',
            name: 'account',
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
          },
          {
            kind: 'Entity',
            name: 'transaction',
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
          }
        ],
        enums: [
          {
            kind: 'Enum',
            name: 'account-type',
            values: [
              {
                kind: 'StringValue',
                name: 'debit',
                value: 'debit'
              },
              {
                kind: 'StringValue',
                name: 'credit',
                value: 'credit'
              }
            ]
          }
        ]
      });

      const enums: Enum[] = schema.enums;

      enums.push(Enum.create({
        kind: 'Enum',
        name: 'transaction-type',
        values: [
          {
            kind: 'UndefinedValue',
            name: 'debit'
          },
          {
            kind: 'UndefinedValue',
            name: 'credit'
          }
        ]
      }, schema));

      expect(enums.length).toEqual(2);
      expect(schema.enums.length).toEqual(1);
    });
  });
});
