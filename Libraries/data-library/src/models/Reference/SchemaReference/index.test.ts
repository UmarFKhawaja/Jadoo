import { Identifier } from '@jadoo/core-library';
import { SchemaReference, SolutionReference } from '..';

describe('SchemaReference', () => {
  describe('create', () => {
    it('creates an schema reference', () => {
      const schemaReference: SchemaReference = SchemaReference.create({
        kind: 'SchemaReference',
        name: ['finance', 'jadoo']
      });

      expect(schemaReference).toBeInstanceOf(SchemaReference);
      expect(schemaReference.name).toBeInstanceOf(Identifier);
      expect(schemaReference.name.paramCase).toEqual('finance');
      expect(schemaReference.solution).toBeInstanceOf(SolutionReference);
      expect(schemaReference.solution.name).toBeInstanceOf(Identifier);
      expect(schemaReference.solution.name.paramCase).toEqual('jadoo');
    });

    it('does not create a schema reference without a name', () => {
      expect(() => {
        SchemaReference.create({
          kind: 'SchemaReference',
          name: ['', 'jadoo']
        });
      }).toThrowError('invalid schema reference');
    });

    it('does not create a schema reference without a solution', () => {
      expect(() => {
        SchemaReference.create({
          kind: 'SchemaReference',
          name: ['finance', '']
        });
      }).toThrowError('invalid schema reference');
    });
  });
});
