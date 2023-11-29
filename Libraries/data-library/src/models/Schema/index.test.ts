import { Identifier } from '@jadoo/core-library';
import { DEFAULT_STRING_LENGTH } from '../../constants';
import { Schema, SchemaSpec } from '.';
import { Entity } from '../Entity';
import { Enum } from '../Enum';
import { Solution } from '../Solution';

const solution: Solution = Solution.create({
  kind: 'Solution',
  name: 'Jadoo',
  schemas: []
});

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
      }, solution);

      expect(schema).toBeInstanceOf(Schema);
    });

    it('does not create a schema without a name', () => {
      expect(() => {
        Schema.create({
          kind: 'Schema',
          name: '',
          entities: [],
          enums: []
        }, solution);
      }).toThrowError('invalid schema');
    });
  });

  describe('name', () => {
    it('returns a Title', () => {
      const schema: Schema = Schema.create({
        kind: 'Schema',
        name: 'finance',
        entities: [],
        enums: []
      }, solution);

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
      }, solution);

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
      }, solution);

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

  describe('toJSON', () => {
    it('returns SchemaSpec', () => {
      const schema: Schema = Schema.create({
        kind: 'Schema',
        name: 'finance',
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
      }, solution);

      const schemaSpec: SchemaSpec = schema.toJSON();

      expect(schemaSpec).toEqual({
        kind: 'Schema',
        name: 'finance',
        entities: [
          {
            kind: 'Entity',
            name: 'account',
            attributes: [
              {
                kind: 'UUIDAttribute',
                name: 'id',
                isPrimary: true,
                isNullable: false,
                sequence: 'UUID'
              },
              {
                kind: 'StringAttribute',
                name: 'name',
                isPrimary: false,
                isNullable: false,
                length: DEFAULT_STRING_LENGTH
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
                isNullable: false,
                sequence: 'UUID'
              },
              {
                kind: 'StringAttribute',
                name: 'name',
                isPrimary: false,
                isNullable: false,
                length: DEFAULT_STRING_LENGTH
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
                value: 'DEBIT'
              },
              {
                kind: 'StringValue',
                name: 'credit',
                value: 'CREDIT'
              }
            ]
          }
        ]
      });
    });
  });
});
