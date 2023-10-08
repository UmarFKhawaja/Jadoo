import { Identifier } from '@jadoo/core-library';
import { TimestampAttribute } from '..';
import { DEFAULT_TIMESTAMP_FORMAT } from '../../../constants';
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

describe('TimestampAttribute', () => {
  describe('create', () => {
    it('creates a timestamp attribute with default format', () => {
      const timestampAttribute: TimestampAttribute = TimestampAttribute.create({
        kind: 'TimestampAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(timestampAttribute).toBeInstanceOf(TimestampAttribute);
      expect(timestampAttribute.name).toBeInstanceOf(Identifier);
      expect(timestampAttribute.name.paramCase).toEqual('value');
      expect(timestampAttribute.isPrimary).toEqual(false);
      expect(timestampAttribute.isNullable).toEqual(true);
      expect(timestampAttribute.format).toEqual(DEFAULT_TIMESTAMP_FORMAT);
    });

    it('creates a timestamp attribute with specified format', () => {
      const TIMESTAMP_FORMAT: string = 'dd-MM-YY HH:mm';

      const timestampAttribute: TimestampAttribute = TimestampAttribute.create({
        kind: 'TimestampAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        format: TIMESTAMP_FORMAT
      }, entity);

      expect(timestampAttribute).toBeInstanceOf(TimestampAttribute);
      expect(timestampAttribute.name).toBeInstanceOf(Identifier);
      expect(timestampAttribute.name.paramCase).toEqual('value');
      expect(timestampAttribute.isPrimary).toEqual(false);
      expect(timestampAttribute.isNullable).toEqual(true);
      expect(timestampAttribute.format).toEqual(TIMESTAMP_FORMAT);
    });

    it('does not create a timestamp attribute without a name', () => {
      expect(() => {
        TimestampAttribute.create({
          kind: 'TimestampAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });
});
