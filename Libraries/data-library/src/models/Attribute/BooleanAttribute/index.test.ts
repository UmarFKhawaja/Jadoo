import { Identifier } from '@jadoo/core-library';
import { BooleanAttribute } from '..';
import { Entity } from '../../Entity';
import { Schema } from '../../Schema';
import { Solution } from '../../Solution';

const solution: Solution = Solution.create({
  kind: 'Solution',
  name: 'Jadoo'
});

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance'
}, solution);

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

describe('BooleanAttribute', () => {
  describe('create', () => {
    it('creates a boolean attribute', () => {
      const booleanAttribute: BooleanAttribute = BooleanAttribute.create({
        kind: 'BooleanAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(booleanAttribute).toBeInstanceOf(BooleanAttribute);
      expect(booleanAttribute.name).toBeInstanceOf(Identifier);
      expect(booleanAttribute.name.paramCase).toEqual('value');
      expect(booleanAttribute.isPrimary).toEqual(false);
      expect(booleanAttribute.isNullable).toEqual(true);
    });

    it('does not create a boolean attribute without a name', () => {
      expect(() => {
        BooleanAttribute.create({
          kind: 'BooleanAttribute',
          name: ''
        }, entity)
      }).toThrowError('invalid attribute');
    });
  });
});
