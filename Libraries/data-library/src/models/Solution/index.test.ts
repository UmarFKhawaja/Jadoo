import { Identifier } from '@jadoo/core-library';
import { Solution, SolutionSpec } from '.';
import { Schema } from '../Schema';

describe('Solution', () => {
  describe('create', () => {
    it('creates an solution', () => {
      const solution: Solution = Solution.create({
        kind: 'Solution',
        name: 'jadoo',
        schemas: [
          {
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
          }
        ]
      });

      expect(solution).toBeInstanceOf(Solution);
    });

    it('does not create a solution without a name', () => {
      expect(() => {
        Solution.create({
          kind: 'Solution',
          name: '',
          schemas: []
        })
      }).toThrowError('invalid solution');
    });
  });

  describe('name', () => {
    it('returns a Title', () => {
      const solution: Solution = Solution.create({
        kind: 'Solution',
        name: 'jadoo',
        schemas: []
      });

      expect(solution.name).toBeInstanceOf(Identifier);
      expect(solution.name.paramCase).toEqual('jadoo');
    });
  });

  describe('schemas', () => {
    it('returns a read-only array', () => {
      const solution: Solution = Solution.create({
        kind: 'Solution',
        name: 'jadoo',
        schemas: [
          {
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
          }
        ]
      });

      const schemas: Schema[] = solution.schemas;

      schemas.push(Schema.create({
        kind: 'Schema',
        name: 'stock',
        entities: [
          {
            kind: 'Entity',
            name: 'income',
            attributes: [
              {
                kind: 'UUIDAttribute',
                name: 'id'
              }
            ]
          }
        ],
        enums: []
      }, solution));

      expect(schemas.length).toEqual(2);
      expect(solution.schemas.length).toEqual(1);
    });
  });

  describe('toJSON', () => {
    it('returns SolutionSpec', () => {
      const solution: Solution = Solution.create({
        kind: 'Solution',
        name: 'jadoo',
        schemas: [
          {
            kind: 'Schema',
            name: 'finance',
            entities: [],
            enums: []
          }
        ]
      });

      const solutionSpec: SolutionSpec = solution.toJSON();

      expect(solutionSpec).toEqual({
        kind: 'Solution',
        name: 'jadoo',
        schemas: [
          {
            kind: 'Schema',
            name: 'finance',
            entities: [],
            enums: []
          }
        ]
      });
    });
  });
});
