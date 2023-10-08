import { Reference, ReferenceKind, ReferenceSpec } from '.';

describe('Reference', () => {
  describe('create', () => {
    it('creates a solution reference', () => {
      const reference: Reference = Reference.create({
        kind: 'SolutionReference',
        name: 'jadoo'
      });

      expect(reference).toBeInstanceOf(Reference);
    });

    it('creates a schema reference', () => {
      const reference: Reference = Reference.create({
        kind: 'SchemaReference',
        name: ['finance', 'jadoo']
      });

      expect(reference).toBeInstanceOf(Reference);
    });

    it('creates an entity reference', () => {
      const reference: Reference = Reference.create({
        kind: 'EntityReference',
        name: ['account', 'finance', 'jadoo']
      });

      expect(reference).toBeInstanceOf(Reference);
    });

    it('creates an enum reference', () => {
      const reference: Reference = Reference.create({
        kind: 'EnumReference',
        name: ['account-type', 'finance', 'jadoo']
      });

      expect(reference).toBeInstanceOf(Reference);
    });

    it('creates an attribute reference', () => {
      const reference: Reference = Reference.create({
        kind: 'AttributeReference',
        name: ['id', 'account', 'finance', 'jadoo']
      });

      expect(reference).toBeInstanceOf(Reference);
    });

    it('creates a value reference', () => {
      const reference: Reference = Reference.create({
        kind: 'ValueReference',
        name: ['debit', 'account-type', 'finance', 'jadoo']
      });

      expect(reference).toBeInstanceOf(Reference);
    });

    it('does not create an unknown reference', () => {
      expect(() => {
        Reference.create({
          kind: 'UnknownReference' as ReferenceKind,
          name: 'unknown',
        } as ReferenceSpec);
      }).toThrowError('unsupported reference kind');
    });
  });
});
