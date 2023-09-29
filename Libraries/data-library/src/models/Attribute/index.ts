import { Identifier, toConstantCase } from '@jadoo/core-library';
import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_DATE_TIME_FORMAT,
  DEFAULT_DECIMAL_PRECISION,
  DEFAULT_DECIMAL_SCALE,
  DEFAULT_STRING_LENGTH,
  DEFAULT_TIME_FORMAT,
  DEFAULT_TIMESTAMP_FORMAT,
  MAX_DECIMAL_PRECISION,
  MAX_DECIMAL_SCALE,
  MAX_STRING_LENGTH,
  MIN_DECIMAL_PRECISION,
  MIN_DECIMAL_SCALE,
  MIN_STRING_LENGTH
} from '../../constants';
import { Entity } from '../Entity';
import { EntityReference, EntityReferenceSpec, EnumReference, EnumReferenceSpec } from '../Reference';

export type AttributeKind =
  | 'BooleanAttribute'
  | 'Int8Attribute'
  | 'Int16Attribute'
  | 'Int32Attribute'
  | 'Int64Attribute'
  | 'SingleAttribute'
  | 'DoubleAttribute'
  | 'DecimalAttribute'
  | 'StringAttribute'
  | 'DateAttribute'
  | 'TimeAttribute'
  | 'DateTimeAttribute'
  | 'TimestampAttribute'
  | 'JSONAttribute'
  | 'UUIDAttribute'
  | 'EnumAttribute'
  | 'EntityAttribute';

export enum IntegerSequence {
  NONE = 'NONE',

  INCREMENT = 'INCREMENT',

  ROW_ID = 'ROW_ID'
}

export enum UUIDSequence {
  NONE = 'NONE',

  UUID = 'UUID',

  ROW_ID = 'ROW_ID'
}

export type AttributeSpec =
  | BooleanAttributeSpec
  | Int8AttributeSpec
  | Int16AttributeSpec
  | Int32AttributeSpec
  | Int64AttributeSpec
  | SingleAttributeSpec
  | DoubleAttributeSpec
  | DecimalAttributeSpec
  | StringAttributeSpec
  | DateAttributeSpec
  | TimeAttributeSpec
  | DateTimeAttributeSpec
  | TimestampAttributeSpec
  | JSONAttributeSpec
  | UUIDAttributeSpec
  | EnumAttributeSpec
  | EntityAttributeSpec;

export interface BooleanAttributeSpec {
  kind: 'BooleanAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
}

export interface Int8AttributeSpec {
  kind: 'Int8Attribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  sequence?: keyof typeof IntegerSequence;
}

export interface Int16AttributeSpec {
  kind: 'Int16Attribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  sequence?: keyof typeof IntegerSequence;
}

export interface Int32AttributeSpec {
  kind: 'Int32Attribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  sequence?: keyof typeof IntegerSequence;
}

export interface Int64AttributeSpec {
  kind: 'Int64Attribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  sequence?: keyof typeof IntegerSequence;
}

export interface SingleAttributeSpec {
  kind: 'SingleAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
}

export interface DoubleAttributeSpec {
  kind: 'DoubleAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
}

export interface DecimalAttributeSpec {
  kind: 'DecimalAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  precision?: number;
  scale?: number;
}

export interface StringAttributeSpec {
  kind: 'StringAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  length?: number;
}

export interface DateAttributeSpec {
  kind: 'DateAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  format?: string;
}

export interface TimeAttributeSpec {
  kind: 'TimeAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  format?: string;
}

export interface DateTimeAttributeSpec {
  kind: 'DateTimeAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  format?: string;
}

export interface TimestampAttributeSpec {
  kind: 'TimestampAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  format?: string;
}

export interface JSONAttributeSpec {
  kind: 'JSONAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
}

export interface UUIDAttributeSpec {
  kind: 'UUIDAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  sequence?: keyof typeof UUIDSequence;
}

export interface EnumAttributeSpec {
  kind: 'EnumAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  enum: EnumReferenceSpec;
}

export interface EntityAttributeSpec {
  kind: 'EntityAttribute';
  name: string;
  isPrimary?: boolean;
  isNullable?: boolean;
  entity: EntityReferenceSpec;
}

export abstract class Attribute {
  private readonly _name: Identifier;

  private readonly _isPrimary: boolean;

  private readonly _isNullable: boolean;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean
  ) {
    this._name = name;
    this._isPrimary = isPrimary;
    this._isNullable = isNullable;
  }

  get name(): Identifier {
    return this._name;
  }

  get isPrimary(): boolean {
    return this._isPrimary;
  }

  get isNullable(): boolean {
    return this._isNullable;
  }

  static create(json: AttributeSpec, entity: Entity): Attribute {
    const kind: AttributeKind = json.kind;

    switch (kind) {
      case 'BooleanAttribute':
        return BooleanAttribute.create(json as BooleanAttributeSpec, entity);

      case 'Int8Attribute':
        return Int8Attribute.create(json as Int8AttributeSpec, entity);

      case 'Int16Attribute':
        return Int16Attribute.create(json as Int16AttributeSpec, entity);

      case 'Int32Attribute':
        return Int32Attribute.create(json as Int32AttributeSpec, entity);

      case 'Int64Attribute':
        return Int64Attribute.create(json as Int64AttributeSpec, entity);

      case 'SingleAttribute':
        return SingleAttribute.create(json as SingleAttributeSpec, entity);

      case 'DoubleAttribute':
        return DoubleAttribute.create(json as DoubleAttributeSpec, entity);

      case 'DecimalAttribute':
        return DecimalAttribute.create(json as DecimalAttributeSpec, entity);

      case 'StringAttribute':
        return StringAttribute.create(json as StringAttributeSpec, entity);

      case 'DateAttribute':
        return DateAttribute.create(json as DateAttributeSpec, entity);

      case 'TimeAttribute':
        return TimeAttribute.create(json as TimeAttributeSpec, entity);

      case 'DateTimeAttribute':
        return DateTimeAttribute.create(json as DateTimeAttributeSpec, entity);

      case 'TimestampAttribute':
        return TimestampAttribute.create(json as TimestampAttributeSpec, entity);

      case 'JSONAttribute':
        return JSONAttribute.create(json as JSONAttributeSpec, entity);

      case 'UUIDAttribute':
        return UUIDAttribute.create(json as UUIDAttributeSpec, entity);

      case 'EnumAttribute':
        return EnumAttribute.create(json as EnumAttributeSpec, entity);

      case 'EntityAttribute':
        return EntityAttribute.create(json as EntityAttributeSpec, entity);

      default:
        throw new Error('unsupported attribute kind');
    }
  }
}


export class BooleanAttribute extends Attribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean
  ) {
    super(name, isPrimary, isNullable);
  }

  static override create(json: BooleanAttributeSpec, entity: Entity): BooleanAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const booleanAttribute: BooleanAttribute = new BooleanAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable
    );

    return booleanAttribute;
  }
}

abstract class IntegerAttribute extends Attribute {
  private readonly _sequence: IntegerSequence;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    sequence: IntegerSequence
  ) {
    super(name, isPrimary, isNullable);

    this._sequence = sequence;
  }

  get sequence(): IntegerSequence {
    return this._sequence;
  }

  abstract get width(): number;
}

export class Int8Attribute extends IntegerAttribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    sequence: IntegerSequence
  ) {
    super(name, isPrimary, isNullable, sequence);
  }

  override get width(): number {
    return 8;
  }

  static override create(json: Int8AttributeSpec, entity: Entity): Int8Attribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const sequence: IntegerSequence = IntegerSequence[toConstantCase(json.sequence || 'NONE') as keyof typeof IntegerSequence];

    if (!name) {
      throw new Error('invalid attribute');
    }

    const int8Attribute: Int8Attribute = new Int8Attribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      sequence
    );

    return int8Attribute;
  }
}

export class Int16Attribute extends IntegerAttribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    sequence: IntegerSequence
  ) {
    super(name, isPrimary, isNullable, sequence);
  }

  override get width(): number {
    return 16;
  }

  static override create(json: Int16AttributeSpec, entity: Entity): Int16Attribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const sequence: IntegerSequence = IntegerSequence[toConstantCase(json.sequence || 'NONE') as keyof typeof IntegerSequence];

    if (!name) {
      throw new Error('invalid attribute');
    }

    const int16Attribute: Int16Attribute = new Int16Attribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      sequence
    );

    return int16Attribute;
  }
}

export class Int32Attribute extends IntegerAttribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    sequence: IntegerSequence
  ) {
    super(name, isPrimary, isNullable, sequence);
  }

  override get width(): number {
    return 32;
  }

  static override create(json: Int32AttributeSpec, entity: Entity): Int32Attribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const sequence: IntegerSequence = IntegerSequence[toConstantCase(json.sequence || 'NONE') as keyof typeof IntegerSequence];

    if (!name) {
      throw new Error('invalid attribute');
    }

    const int32Attribute: Int32Attribute = new Int32Attribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      sequence
    );

    return int32Attribute;
  }
}

export class Int64Attribute extends IntegerAttribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    sequence: IntegerSequence
  ) {
    super(name, isPrimary, isNullable, sequence);
  }

  override get width(): number {
    return 64;
  }

  static override create(json: Int64AttributeSpec, entity: Entity): Int64Attribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const sequence: IntegerSequence = IntegerSequence[toConstantCase(json.sequence || 'NONE') as keyof typeof IntegerSequence];

    if (!name) {
      throw new Error('invalid attribute');
    }

    const int64Attribute: Int64Attribute = new Int64Attribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      sequence
    );

    return int64Attribute;
  }
}

export class SingleAttribute extends Attribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean
  ) {
    super(name, isPrimary, isNullable);
  }

  get width(): number {
    return 32;
  }

  static override create(json: SingleAttributeSpec, entity: Entity): SingleAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const singleAttribute: SingleAttribute = new SingleAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable
    );

    return singleAttribute;
  }
}

export class DoubleAttribute extends Attribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean
  ) {
    super(name, isPrimary, isNullable);
  }

  get width(): number {
    return 64;
  }

  static override create(json: DoubleAttributeSpec, entity: Entity): DoubleAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const doubleAttribute: DoubleAttribute = new DoubleAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable
    );

    return doubleAttribute;
  }
}

export class DecimalAttribute extends Attribute {
  private readonly _precision: number;

  private readonly _scale: number;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    precision: number,
    scale: number
  ) {
    super(name, isPrimary, isNullable);

    this._precision = precision;
    this._scale = scale;
  }

  get precision(): number {
    return this._precision;
  }

  get scale(): number {
    return this._scale;
  }

  static override create(json: DecimalAttributeSpec, entity: Entity): DecimalAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const precision: number = json.precision || DEFAULT_DECIMAL_PRECISION;
    const scale: number = json.scale || DEFAULT_DECIMAL_SCALE;

    if (!name) {
      throw new Error('invalid attribute');
    }

    if (precision < MIN_DECIMAL_PRECISION || precision > MAX_DECIMAL_PRECISION) {
      throw new Error('invalid attribute');
    }

    if (scale < MIN_DECIMAL_SCALE || scale > MAX_DECIMAL_SCALE) {
      throw new Error('invalid attribute');
    }

    const decimalAttribute: DecimalAttribute = new DecimalAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      precision,
      scale
    );

    return decimalAttribute;
  }
}

export class StringAttribute extends Attribute {
  private readonly _length: number;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    length: number
  ) {
    super(name, isPrimary, isNullable);

    this._length = length;
  }

  get length(): number {
    return this._length;
  }

  static override create(json: StringAttributeSpec, entity: Entity): StringAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const length: number = json.length || DEFAULT_STRING_LENGTH;

    if (!name) {
      throw new Error('invalid attribute');
    }

    if (length < MIN_STRING_LENGTH || length > MAX_STRING_LENGTH) {
      throw new Error('invalid attribute');
    }

    const stringAttribute: StringAttribute = new StringAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      length
    );

    return stringAttribute;
  }
}

export class DateAttribute extends Attribute {
  private readonly _format: string;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    format: string
  ) {
    super(name, isPrimary, isNullable);

    this._format = format;
  }

  get format(): string {
    return this._format;
  }

  static override create(json: DateAttributeSpec, entity: Entity): DateAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const format: string = json.format || DEFAULT_DATE_FORMAT;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const dateAttribute: DateAttribute = new DateAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      format
    );

    return dateAttribute;
  }
}

export class TimeAttribute extends Attribute {
  private readonly _format: string;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    format: string
  ) {
    super(name, isPrimary, isNullable);

    this._format = format;
  }

  get format(): string {
    return this._format;
  }

  static override create(json: TimeAttributeSpec, entity: Entity): TimeAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const format: string = json.format || DEFAULT_TIME_FORMAT;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const timeAttribute: TimeAttribute = new TimeAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      format
    );

    return timeAttribute;
  }
}

export class DateTimeAttribute extends Attribute {
  private readonly _format: string;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    format: string
  ) {
    super(name, isPrimary, isNullable);

    this._format = format;
  }

  get format(): string {
    return this._format;
  }

  static override create(json: DateTimeAttributeSpec, entity: Entity): DateTimeAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const format: string = json.format || DEFAULT_DATE_TIME_FORMAT;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const dateTimeAttribute: DateTimeAttribute = new DateTimeAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      format
    );

    return dateTimeAttribute;
  }
}

export class TimestampAttribute extends Attribute {
  private readonly _format: string;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    format: string
  ) {
    super(name, isPrimary, isNullable);

    this._format = format;
  }

  get format(): string {
    return this._format;
  }

  static override create(json: TimestampAttributeSpec, entity: Entity): TimestampAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const format: string = json.format || DEFAULT_TIMESTAMP_FORMAT;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const timestampAttribute: TimestampAttribute = new TimestampAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      format
    );

    return timestampAttribute;
  }
}

export class JSONAttribute extends Attribute {
  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean
  ) {
    super(name, isPrimary, isNullable);
  }

  static override create(json: JSONAttributeSpec, entity: Entity): JSONAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const jsonAttribute: JSONAttribute = new JSONAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable
    );

    return jsonAttribute;
  }
}

export class UUIDAttribute extends Attribute {
  private readonly _sequence: UUIDSequence;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    sequence: UUIDSequence
  ) {
    super(name, isPrimary, isNullable);

    this._sequence = sequence;
  }

  get sequence(): UUIDSequence {
    return this._sequence;
  }

  static override create(json: UUIDAttributeSpec, entity: Entity): UUIDAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const sequence: UUIDSequence = UUIDSequence[toConstantCase(json.sequence || 'NONE') as keyof typeof UUIDSequence];

    if (!name) {
      throw new Error('invalid attribute');
    }

    const uuidAttribute: UUIDAttribute = new UUIDAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      sequence
    );

    return uuidAttribute;
  }
}

export class EnumAttribute extends Attribute {
  private readonly _enumReference: EnumReference;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    enumReference: EnumReference
  ) {
    super(name, isPrimary, isNullable);

    this._enumReference = enumReference;
  }

  get enumReference(): EnumReference {
    return this._enumReference;
  }

  static override create(json: EnumAttributeSpec, entity: Entity): EnumAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const $enumReference: EnumReferenceSpec = json.enum;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const enumAttribute: EnumAttribute = new EnumAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      EnumReference.create($enumReference)
    );

    return enumAttribute;
  }
}

export class EntityAttribute extends Attribute {
  private readonly _entityReference: EntityReference;

  protected constructor(
    name: Identifier,
    isPrimary: boolean,
    isNullable: boolean,
    entityReference: EntityReference
  ) {
    super(name, isPrimary, isNullable);

    this._entityReference = entityReference;
  }

  get entityReference(): EntityReference {
    return this._entityReference;
  }

  static override create(json: EntityAttributeSpec, entity: Entity): EntityAttribute {
    const name: string = json.name;
    const isPrimary: boolean = json.isPrimary || false;
    const isNullable: boolean = json.isNullable || false;
    const entityReference: EntityReferenceSpec = json.entity;

    if (!name) {
      throw new Error('invalid attribute');
    }

    const entityAttribute: EntityAttribute = new EntityAttribute(
      Identifier.create(name),
      isPrimary,
      isNullable,
      EntityReference.create(entityReference)
    );

    return entityAttribute;
  }
}