import {
  AttributeSpec,
  BooleanAttributeSpec,
  DateAttributeSpec,
  DateTimeAttributeSpec,
  DecimalAttributeSpec,
  DoubleAttributeSpec,
  EntityAttributeSpec,
  EntitySpec,
  EnumAttributeSpec,
  EnumSpec,
  Int16AttributeSpec,
  Int32AttributeSpec,
  Int64AttributeSpec,
  Int8AttributeSpec,
  IntegerValueSpec,
  JSONAttributeSpec,
  ModelKind,
  ModelSpec,
  SchemaSpec,
  SingleAttributeSpec,
  Solution,
  SolutionSpec,
  StringAttributeSpec,
  StringValueSpec,
  TimeAttributeSpec,
  TimestampAttributeSpec,
  UndefinedValueSpec,
  UUIDAttributeSpec,
  ValueSpec
} from '@jadoo/data-library';

export class SolutionsCreator {
  constructor() {
  }

  create(map: Map<ModelKind, Map<string, ModelSpec>>): Solution[] {
    return this
      .getSolutionSpecs(map)
      .map((solutionSpec: SolutionSpec) => Solution.create(solutionSpec));
  }

  private getSolutionSpecs(map: Map<ModelKind, Map<string, ModelSpec>>): SolutionSpec[] {
    return Array
      .from(map.get('Solution')!.values())
      .map((modelSpec: ModelSpec) => {
        const solutionSpec: SolutionSpec = {
          kind: 'Solution',
          name: modelSpec.name,
          schemas: this.getSchemaSpecs(map, modelSpec.name)
        };

        return solutionSpec;
      });
  }

  private getSchemaSpecs(map: Map<ModelKind, Map<string, ModelSpec>>, solutionName: string): SchemaSpec[] {
    return Array
      .from(map.get('Schema')!.values()!)
      .filter((modelSpec: ModelSpec) => modelSpec.name.startsWith(`${solutionName}.`))
      .map((modelSpec: ModelSpec) => {
        const schemaSpec: SchemaSpec = {
          kind: 'Schema',
          name: modelSpec.name,
          entities: this.getEntitySpecs(map, modelSpec.name),
          enums: this.getEnumSpecs(map, modelSpec.name)
        };

        return schemaSpec;
      });
  }

  private getEntitySpecs(map: Map<ModelKind, Map<string, ModelSpec>>, schemaName: string): EntitySpec[] {
    return Array
      .from(map.get('Entity')!.values())
      .filter((modelSpec: ModelSpec) => modelSpec.name.startsWith(`${schemaName}.`))
      .map((modelSpec: ModelSpec) => {
        const entitySpec: EntitySpec = {
          kind: 'Entity',
          name: modelSpec.name,
          attributes: this.getAttributeSpecs(modelSpec)
        };

        return entitySpec;
      });
  }

  private getEnumSpecs(map: Map<ModelKind, Map<string, ModelSpec>>, schemaName: string): EnumSpec[] {
    return Array
      .from(map.get('Enum')!.values())
      .filter((modelSpec: ModelSpec) => modelSpec.name.startsWith(`${schemaName}.`))
      .map((modelSpec: ModelSpec) => {
        const enumSpec: EnumSpec = {
          kind: 'Enum',
          name: modelSpec.name,
          values: this.getValueSpecs(modelSpec)
        };

        return enumSpec;
      });
  }

  private getAttributeSpecs(modelSpec: ModelSpec): AttributeSpec[] {
    return modelSpec.options.attributes.map((attributeSpec: Record<string, any>): AttributeSpec => {
      switch (attributeSpec.type) {
        case 'Boolean':
          return this.getBooleanAttributeSpec(attributeSpec);

        case 'Int8':
          return this.getInt8AttributeSpec(attributeSpec);

        case 'Int16':
          return this.getInt16AttributeSpec(attributeSpec);

        case 'Int32':
          return this.getInt32AttributeSpec(attributeSpec);

        case 'Int64':
          return this.getInt64AttributeSpec(attributeSpec);

        case 'Single':
          return this.getSingleAttributeSpec(attributeSpec);

        case 'Double':
          return this.getDoubleAttributeSpec(attributeSpec);

        case 'Decimal':
          return this.getDecimalAttributeSpec(attributeSpec);

        case 'String':
          return this.getStringAttributeSpec(attributeSpec);

        case 'Date':
          return this.getDateAttributeSpec(attributeSpec);

        case 'Time':
          return this.getTimeAttributeSpec(attributeSpec);

        case 'DateTime':
          return this.getDateTimeAttributeSpec(attributeSpec);

        case 'Timestamp':
          return this.getTimestampAttributeSpec(attributeSpec);

        case 'JSON':
          return this.getJSONAttributeSpec(attributeSpec);

        case 'UUID':
          return this.getUUIDAttributeSpec(attributeSpec);

        case 'Entity':
          return this.getEntityAttributeSpec(attributeSpec);

        case 'Enum':
          return this.getEnumAttributeSpec(attributeSpec);

        default:
          throw new Error(`unsupported attribute type ${attributeSpec.type}`);
      }
    });
  }

  private getBooleanAttributeSpec(attributeSpec: Record<string, any>): BooleanAttributeSpec {
    const booleanAttributeSpec: BooleanAttributeSpec = {
      kind: 'BooleanAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable
    };

    return booleanAttributeSpec;
  }

  private getInt8AttributeSpec(attributeSpec: Record<string, any>): Int8AttributeSpec {
    const int8AttributeSpec: Int8AttributeSpec = {
      kind: 'Int8Attribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      sequence: attributeSpec.sequence
    };

    return int8AttributeSpec;
  }

  private getInt16AttributeSpec(attributeSpec: Record<string, any>): Int16AttributeSpec {
    const int16AttributeSpec: Int16AttributeSpec = {
      kind: 'Int16Attribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      sequence: attributeSpec.sequence
    };

    return int16AttributeSpec;
  }

  private getInt32AttributeSpec(attributeSpec: Record<string, any>): Int32AttributeSpec {
    const int32AttributeSpec: Int32AttributeSpec = {
      kind: 'Int32Attribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      sequence: attributeSpec.sequence
    };

    return int32AttributeSpec;
  }

  private getInt64AttributeSpec(attributeSpec: Record<string, any>): Int64AttributeSpec {
    const int64AttributeSpec: Int64AttributeSpec = {
      kind: 'Int64Attribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      sequence: attributeSpec.sequence
    };

    return int64AttributeSpec;
  }

  private getSingleAttributeSpec(attributeSpec: Record<string, any>): SingleAttributeSpec {
    const singleAttributeSpec: SingleAttributeSpec = {
      kind: 'SingleAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable
    };

    return singleAttributeSpec;
  }

  private getDoubleAttributeSpec(attributeSpec: Record<string, any>): DoubleAttributeSpec {
    const doubleAttributeSpec: DoubleAttributeSpec = {
      kind: 'DoubleAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable
    };

    return doubleAttributeSpec;
  }

  private getDecimalAttributeSpec(attributeSpec: Record<string, any>): DecimalAttributeSpec {
    const decimalAttributeSpec: DecimalAttributeSpec = {
      kind: 'DecimalAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      precision: attributeSpec.precision,
      scale: attributeSpec.scale
    };

    return decimalAttributeSpec;
  }

  private getStringAttributeSpec(attributeSpec: Record<string, any>): StringAttributeSpec {
    const stringAttributeSpec: StringAttributeSpec = {
      kind: 'StringAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      length: attributeSpec.length
    };

    return stringAttributeSpec;
  }

  private getDateAttributeSpec(attributeSpec: Record<string, any>): DateAttributeSpec {
    const dateAttributeSpec: DateAttributeSpec = {
      kind: 'DateAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      format: attributeSpec.format
    };

    return dateAttributeSpec;
  }

  private getTimeAttributeSpec(attributeSpec: Record<string, any>): TimeAttributeSpec {
    const timeAttributeSpec: TimeAttributeSpec = {
      kind: 'TimeAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      format: attributeSpec.format
    };

    return timeAttributeSpec;
  }

  private getDateTimeAttributeSpec(attributeSpec: Record<string, any>): DateTimeAttributeSpec {
    const dateTimeAttributeSpec: DateTimeAttributeSpec = {
      kind: 'DateTimeAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      format: attributeSpec.format
    };

    return dateTimeAttributeSpec;
  }

  private getTimestampAttributeSpec(attributeSpec: Record<string, any>): TimestampAttributeSpec {
    const timestampAttributeSpec: TimestampAttributeSpec = {
      kind: 'TimestampAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      format: attributeSpec.format
    };

    return timestampAttributeSpec;
  }

  private getJSONAttributeSpec(attributeSpec: Record<string, any>): JSONAttributeSpec {
    const jsonAttributeSpec: JSONAttributeSpec = {
      kind: 'JSONAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable
    };

    return jsonAttributeSpec;
  }

  private getUUIDAttributeSpec(attributeSpec: Record<string, any>): UUIDAttributeSpec {
    const uuidAttributeSpec: UUIDAttributeSpec = {
      kind: 'UUIDAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      sequence: attributeSpec.sequence
    };

    return uuidAttributeSpec;
  }

  private getEntityAttributeSpec(attributeSpec: Record<string, any>): EntityAttributeSpec {
    const entityAttributeSpec: EntityAttributeSpec = {
      kind: 'EntityAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      reference: attributeSpec.reference,
      arity: attributeSpec.arity
    };

    return entityAttributeSpec;
  }

  private getEnumAttributeSpec(attributeSpec: Record<string, any>): EnumAttributeSpec {
    const enumAttributeSpec: EnumAttributeSpec = {
      kind: 'EnumAttribute',
      name: attributeSpec.name,
      isPrimary: attributeSpec.isPrimary,
      isNullable: attributeSpec.isNullable,
      enum: attributeSpec.enum
    };

    return enumAttributeSpec;
  }

  private getValueSpecs(modelSpec: ModelSpec): ValueSpec[] {
    return modelSpec.options.values.map((valueSpec: Record<string, any>): ValueSpec => {
      switch (valueSpec.type) {
        case 'Integer':
          return this.getIntegerValueSpec(valueSpec);

        case 'String':
          return this.getStringValueSpec(valueSpec);

        case 'Undefined':
          return this.getUndefinedValueSpec(valueSpec);

        default:
          throw new Error(`unsupported value type ${valueSpec.type}`);
      }
    });
  }

  private getIntegerValueSpec(valueSpec: Record<string, any>): IntegerValueSpec {
    const integerValueSpec: IntegerValueSpec = {
      kind: 'IntegerValue',
      name: valueSpec.name,
      value: valueSpec.value
    };

    return integerValueSpec;
  }

  private getStringValueSpec(valueSpec: Record<string, any>): StringValueSpec {
    const stringValueSpec: StringValueSpec = {
      kind: 'StringValue',
      name: valueSpec.name,
      value: valueSpec.value
    };

    return stringValueSpec;
  }

  private getUndefinedValueSpec(valueSpec: Record<string, any>): UndefinedValueSpec {
    const undefinedValueSpec: UndefinedValueSpec = {
      kind: 'UndefinedValue',
      name: valueSpec.name
    };

    return undefinedValueSpec;
  }
}
