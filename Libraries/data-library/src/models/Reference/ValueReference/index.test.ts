import { Identifier, Title } from '@jadoo/core-library';
import { EnumReference, SchemaReference, ValueReference } from '..';

describe('ValueReference', () => {
  describe('create', () => {
    it('creates an value reference', () => {
      const valueReference: ValueReference = ValueReference.create({
        kind: 'ValueReference',
        name: ['debit', 'account-type', 'finance', 'jadoo']
      });

      expect(valueReference).toBeInstanceOf(ValueReference);
      expect(valueReference.name).toBeInstanceOf(Identifier);
      expect(valueReference.name.paramCase).toEqual('debit');
      expect(valueReference.$enum).toBeInstanceOf(EnumReference);
      expect(valueReference.$enum.name).toBeInstanceOf(Title);
      expect(valueReference.$enum.name.singular).toBeInstanceOf(Identifier);
      expect(valueReference.$enum.name.singular.paramCase).toEqual('account-type');
      expect(valueReference.$enum.name.plural).toBeInstanceOf(Identifier);
      expect(valueReference.$enum.name.plural.paramCase).toEqual('account-types');
      expect(valueReference.$enum.schema).toBeInstanceOf(SchemaReference);
      expect(valueReference.$enum.schema.name).toBeInstanceOf(Identifier);
      expect(valueReference.$enum.schema.name.paramCase).toEqual('finance');
    });
  });

  it('does not create an value reference without a name', () => {
    expect(() => {
      ValueReference.create({
        kind: 'ValueReference',
        name: ['', 'account-type', 'finance', 'jadoo']
      });
    }).toThrowError('invalid value reference');
  });

  it('does not create an value reference without an enum', () => {
    expect(() => {
      ValueReference.create({
        kind: 'ValueReference',
        name: ['debit', '', 'finance', 'jadoo']
      });
    }).toThrowError('invalid value reference');
  });

  it('does not create an value reference without a schema', () => {
    expect(() => {
      ValueReference.create({
        kind: 'ValueReference',
        name: ['debit', 'account-type', '', 'jadoo']
      });
    }).toThrowError('invalid value reference');
  });

  it('does not create an value reference without a solution', () => {
    expect(() => {
      ValueReference.create({
        kind: 'ValueReference',
        name: ['debit', 'account-type', 'finance', '']
      });
    }).toThrowError('invalid value reference');
  });
});
