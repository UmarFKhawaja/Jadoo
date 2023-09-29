import { Identifier } from '@jadoo/core-library';
import { SchemaReference } from '..';

describe('SchemaReference', () => {
  describe('create', () => {
    it('creates an schema reference', () => {
      const schemaReference: SchemaReference = SchemaReference.create({
        kind: 'SchemaReference',
        name: 'finance'
      });

      expect(schemaReference).toBeInstanceOf(SchemaReference);
      expect(schemaReference.name).toBeInstanceOf(Identifier);
      expect(schemaReference.name.paramCase).toEqual('finance');
    });

    it('does not create a schema reference without a name', () => {
      expect(() => {
        SchemaReference.create({
          kind: 'SchemaReference',
          name: ''
        });
      }).toThrowError('invalid schema reference');
    });
  });
});
