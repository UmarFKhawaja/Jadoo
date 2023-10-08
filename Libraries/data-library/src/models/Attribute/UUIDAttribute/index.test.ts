import { Identifier } from '@jadoo/core-library';
import { UUIDAttribute, UUIDSequence } from '..';
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

describe('UUIDAttribute', () => {
  describe('create', () => {
    it('creates a UUID attribute', () => {
      const uuidAttribute: UUIDAttribute = UUIDAttribute.create({
        kind: 'UUIDAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(uuidAttribute).toBeInstanceOf(UUIDAttribute);
      expect(uuidAttribute.name).toBeInstanceOf(Identifier);
      expect(uuidAttribute.name.paramCase).toEqual('value');
      expect(uuidAttribute.isPrimary).toEqual(false);
      expect(uuidAttribute.isNullable).toEqual(true);
      expect(uuidAttribute.sequence).toEqual(UUIDSequence.NONE);
    });

    it('does not create a UUID attribute without a name', () => {
      expect(() => {
        UUIDAttribute.create({
          kind: 'UUIDAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
