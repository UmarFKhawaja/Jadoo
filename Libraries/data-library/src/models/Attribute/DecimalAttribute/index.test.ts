import { Identifier } from '@jadoo/core-library';
import { DecimalAttribute, DecimalAttributeSpec } from '..';
import {
  DEFAULT_DECIMAL_PRECISION,
  DEFAULT_DECIMAL_SCALE,
  MAX_DECIMAL_PRECISION,
  MAX_DECIMAL_SCALE,
  MIN_DECIMAL_PRECISION,
  MIN_DECIMAL_SCALE
} from '../../../constants';
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

describe('DecimalAttribute', () => {
  describe('create', () => {
    it('creates a decimal attribute with default precision and scale', () => {
      const decimalAttribute: DecimalAttribute = DecimalAttribute.create({
        kind: 'DecimalAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      expect(decimalAttribute).toBeInstanceOf(DecimalAttribute);
      expect(decimalAttribute.name).toBeInstanceOf(Identifier);
      expect(decimalAttribute.name.paramCase).toEqual('value');
      expect(decimalAttribute.isPrimary).toEqual(false);
      expect(decimalAttribute.isNullable).toEqual(true);
      expect(decimalAttribute.precision).toEqual(DEFAULT_DECIMAL_PRECISION);
      expect(decimalAttribute.scale).toEqual(DEFAULT_DECIMAL_SCALE);
    });

    it('creates a decimal attribute with specified precision and scale', () => {
      const decimalAttribute: DecimalAttribute = DecimalAttribute.create({
        kind: 'DecimalAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        precision: 12,
        scale: 4
      }, entity);

      expect(decimalAttribute).toBeInstanceOf(DecimalAttribute);
      expect(decimalAttribute.name).toBeInstanceOf(Identifier);
      expect(decimalAttribute.name.paramCase).toEqual('value');
      expect(decimalAttribute.isPrimary).toEqual(false);
      expect(decimalAttribute.isNullable).toEqual(true);
      expect(decimalAttribute.precision).toEqual(12);
      expect(decimalAttribute.scale).toEqual(4);
    });

    it('does not create a decimal attribute without a name', () => {
      expect(() => {
        DecimalAttribute.create({
          kind: 'DecimalAttribute',
          name: ''
        }, entity);
      }).toThrowError('invalid attribute');
    });

    it('does not create a decimal attribute with a precision below MIN_DECIMAL_PRECISION', () => {
      expect(() => {
        DecimalAttribute.create({
          kind: 'DecimalAttribute',
          name: 'value',
          precision: MIN_DECIMAL_PRECISION - 10
        }, entity);
      }).toThrowError('invalid attribute');
    });

    it('does not create a decimal attribute with a precision above MAX_DECIMAL_PRECISION', () => {
      expect(() => {
        DecimalAttribute.create({
          kind: 'DecimalAttribute',
          name: 'value',
          precision: MAX_DECIMAL_PRECISION + 10
        }, entity);
      }).toThrowError('invalid attribute');
    });

    it('does not create a decimal attribute with a scale below MIN_DECIMAL_SCALE', () => {
      expect(() => {
        DecimalAttribute.create({
          kind: 'DecimalAttribute',
          name: 'value',
          scale: MIN_DECIMAL_SCALE - 10
        }, entity);
      }).toThrowError('invalid attribute');
    });

    it('does not create a decimal attribute with a scale above MAX_DECIMAL_SCALE', () => {
      expect(() => {
        DecimalAttribute.create({
          kind: 'DecimalAttribute',
          name: 'value',
          scale: MAX_DECIMAL_SCALE + 10
        }, entity);
      }).toThrowError('invalid attribute');
    });
  });

  describe('toJSON', () => {
    it('returns DecimalAttributeSpec', () => {
      const decimalAttribute: DecimalAttribute = DecimalAttribute.create({
        kind: 'DecimalAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true
      }, entity);

      const decimalAttributeSpec: DecimalAttributeSpec = decimalAttribute.toJSON();

      expect(decimalAttributeSpec).toEqual({
        kind: 'DecimalAttribute',
        name: 'value',
        isPrimary: false,
        isNullable: true,
        precision: DEFAULT_DECIMAL_PRECISION,
        scale: DEFAULT_DECIMAL_SCALE
      });
    });
  });
});
