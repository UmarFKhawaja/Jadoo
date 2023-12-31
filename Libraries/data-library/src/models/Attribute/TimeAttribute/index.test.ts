import { Identifier } from '@jadoo/core-library';
import { TimeAttribute, TimeAttributeSpec } from '..';
import { DEFAULT_TIME_FORMAT } from '../../../constants';
import { Entity } from '../../Entity';
import { Schema } from '../../Schema';
import { Solution } from '../../Solution';

const solution: Solution = Solution.create({
  kind: 'Solution',
  name: 'Jadoo',
  schemas: []
});

const schema: Schema = Schema.create({
  kind: 'Schema',
  name: 'finance',
  entities: [],
  enums: []
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

describe('TimeAttribute', () => {
  describe('create', () => {
    it('creates a time attribute with default format', () => {
      const timeAttribute: TimeAttribute = TimeAttribute.create({
        kind: 'TimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(timeAttribute).toBeInstanceOf(TimeAttribute);
      expect(timeAttribute.name).toBeInstanceOf(Identifier);
      expect(timeAttribute.name.paramCase).toEqual('value');
      expect(timeAttribute.isPrimary).toEqual(false);
      expect(timeAttribute.isNullable).toEqual(true);
      expect(timeAttribute.format).toEqual(DEFAULT_TIME_FORMAT);
    });

    it('creates a time attribute with specified format', () => {
      const TIME_FORMAT: string = 'HH:mm';

      const timeAttribute: TimeAttribute = TimeAttribute.create({
        kind: 'TimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: TIME_FORMAT
      }, entity);

      expect(timeAttribute).toBeInstanceOf(TimeAttribute);
      expect(timeAttribute.name).toBeInstanceOf(Identifier);
      expect(timeAttribute.name.paramCase).toEqual('value');
      expect(timeAttribute.isPrimary).toEqual(false);
      expect(timeAttribute.isNullable).toEqual(true);
      expect(timeAttribute.format).toEqual(TIME_FORMAT);
    });

    it('does not create a time attribute without a name', () => {
      expect(() => {
        TimeAttribute.create({
          kind: 'TimeAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns TimeAttributeSpec', () => {
      const timeAttribute: TimeAttribute = TimeAttribute.create({
        kind: 'TimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const timeAttributeSpec: TimeAttributeSpec = timeAttribute.toJSON();

      expect(timeAttributeSpec).toEqual({
        kind: 'TimeAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: DEFAULT_TIME_FORMAT
      });
    });
  });
});
