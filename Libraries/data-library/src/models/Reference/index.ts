import { Identifier, Title } from '@jadoo/core-library';

export type ReferenceKind =
  | 'SolutionReference'
  | 'SchemaReference'
  | 'EntityReference'
  | 'EnumReference'
  | 'AttributeReference'
  | 'ValueReference';

export type ReferenceSpec =
  | SolutionReferenceSpec
  | SchemaReferenceSpec
  | EntityReferenceSpec
  | EnumReferenceSpec
  | AttributeReferenceSpec
  | ValueReferenceSpec;

export interface SolutionReferenceSpec {
  kind: 'SolutionReference';
  name: string;
}

export interface SchemaReferenceSpec {
  kind: 'SchemaReference';
  name: [string, string];
}

export interface EntityReferenceSpec {
  kind: 'EntityReference';
  name: [string, string, string];
}

export interface EnumReferenceSpec {
  kind: 'EnumReference';
  name: [string, string, string];
}

export interface AttributeReferenceSpec {
  kind: 'AttributeReference';
  name: [string, string, string, string];
}

export interface ValueReferenceSpec {
  kind: 'ValueReference';
  name: [string, string, string, string];
}

export abstract class Reference {
  protected constructor() {
  }

  abstract toJSON(): ReferenceSpec;

  static create(json: ReferenceSpec): Reference {
    const kind: ReferenceKind = json.kind;

    switch (kind) {
      case 'SolutionReference':
        return SolutionReference.create(json as SolutionReferenceSpec);

      case 'SchemaReference':
        return SchemaReference.create(json as SchemaReferenceSpec);

      case 'EntityReference':
        return EntityReference.create(json as EntityReferenceSpec);

      case 'EnumReference':
        return EnumReference.create(json as EnumReferenceSpec);

      case 'AttributeReference':
        return AttributeReference.create(json as AttributeReferenceSpec);

      case 'ValueReference':
        return ValueReference.create(json as ValueReferenceSpec);

      default:
        throw new Error('unsupported reference kind');
    }
  }
}

export class SolutionReference extends Reference {
  private readonly _name: Identifier;

  protected constructor(
    name: Identifier
  ) {
    super();

    this._name = name;
  }

  get name(): Identifier {
    return this._name;
  }

  override toJSON(): SolutionReferenceSpec {
    return {
      kind: 'SolutionReference',
      name: this.name.paramCase
    };
  }

  static override create(json: SolutionReferenceSpec): SolutionReference {
    const name: string = json.name;

    if (!name) {
      throw new Error('invalid solution reference');
    }

    const solutionReference: SolutionReference = new SolutionReference(
      Identifier.create(name)
    );

    return solutionReference;
  }
}

export class SchemaReference extends Reference {
  private readonly _name: Identifier;

  private readonly _solution: SolutionReference;

  protected constructor(
    name: Identifier,
    solution: SolutionReference
  ) {
    super();

    this._name = name;
    this._solution = solution;
  }

  get name(): Identifier {
    return this._name;
  }

  get solution(): SolutionReference {
    return this._solution;
  }

  override toJSON(): SchemaReferenceSpec {
    return {
      kind: 'SchemaReference',
      name: [
        this.name.paramCase,
        this.solution.name.paramCase
      ]
    };
  }

  static override create(json: SchemaReferenceSpec): SchemaReference {
    const [name, solution]: [string, string] = json.name;

    if (!name) {
      throw new Error('invalid schema reference');
    }

    if (!solution) {
      throw new Error('invalid schema reference');
    }

    const schemaReference: SchemaReference = new SchemaReference(
      Identifier.create(name),
      SolutionReference.create({
        kind: 'SolutionReference',
        name: solution
      })
    );

    return schemaReference;
  }
}

export class EntityReference extends Reference {
  private readonly _name: Title;

  private readonly _schema: SchemaReference;

  protected constructor(
    name: Title,
    schema: SchemaReference
  ) {
    super();

    this._name = name;
    this._schema = schema;
  }

  get name(): Title {
    return this._name;
  }

  get schema(): SchemaReference {
    return this._schema;
  }

  override toJSON(): EntityReferenceSpec {
    return {
      kind: 'EntityReference',
      name: [
        this.name.singular.paramCase,
        this.schema.name.paramCase,
        this.schema.solution.name.paramCase
      ]
    };
  }

  static override create(json: EntityReferenceSpec): EntityReference {
    const [name, schema, solution]: [string, string, string] = json.name;

    if (!name) {
      throw new Error('invalid entity reference');
    }

    if (!schema) {
      throw new Error('invalid entity reference');
    }

    if (!solution) {
      throw new Error('invalid entity reference');
    }

    const entityReference: EntityReference = new EntityReference(
      Title.create(name),
      SchemaReference.create({
        kind: 'SchemaReference',
        name: [schema, solution]
      })
    );

    return entityReference;
  }
}

export class EnumReference extends Reference {
  private readonly _name: Title;

  private readonly _schema: SchemaReference;

  protected constructor(
    name: Title,
    schema: SchemaReference
  ) {
    super();

    this._name = name;
    this._schema = schema;
  }

  get name(): Title {
    return this._name;
  }

  get schema(): SchemaReference {
    return this._schema;
  }

  override toJSON(): EnumReferenceSpec {
    return {
      kind: 'EnumReference',
      name: [
        this.name.singular.paramCase,
        this.schema.name.paramCase,
        this.schema.solution.name.paramCase
      ]
    };
  }

  static override create(json: EnumReferenceSpec): EnumReference {
    const [name, schema, solution]: [string, string, string] = json.name;

    if (!name) {
      throw new Error('invalid enum reference');
    }

    if (!schema) {
      throw new Error('invalid enum reference');
    }

    if (!solution) {
      throw new Error('invalid enum reference');
    }

    const enumReference: EnumReference = new EnumReference(
      Title.create(name),
      SchemaReference.create({
        kind: 'SchemaReference',
        name: [schema, solution]
      })
    );

    return enumReference;
  }
}

export class AttributeReference extends Reference {
  private readonly _name: Identifier;

  private readonly _entity: EntityReference;

  protected constructor(
    name: Identifier,
    entity: EntityReference
  ) {
    super();

    this._name = name;
    this._entity = entity;
  }

  get name(): Identifier {
    return this._name;
  }

  get entity(): EntityReference {
    return this._entity;
  }

  override toJSON(): AttributeReferenceSpec {
    return {
      kind: 'AttributeReference',
      name: [
        this.name.paramCase,
        this.entity.name.singular.paramCase,
        this.entity.schema.name.paramCase,
        this.entity.schema.solution.name.paramCase
      ]
    };
  }

  static override create(json: AttributeReferenceSpec): AttributeReference {
    const [name, entity, schema, solution]: [string, string, string, string] = json.name;

    if (!name) {
      throw new Error('invalid attribute reference');
    }

    if (!entity) {
      throw new Error('invalid attribute reference');
    }

    if (!schema) {
      throw new Error('invalid attribute reference');
    }

    if (!solution) {
      throw new Error('invalid attribute reference');
    }

    const attributeReference: AttributeReference = new AttributeReference(
      Identifier.create(name),
      EntityReference.create({
        kind: 'EntityReference',
        name: [entity, schema, solution]
      })
    );

    return attributeReference;
  }
}

export class ValueReference extends Reference {
  private readonly _name: Identifier;

  private readonly _enum: EnumReference;

  protected constructor(
    name: Identifier,
    $enum: EnumReference
  ) {
    super();

    this._name = name;
    this._enum = $enum;
  }

  get name(): Identifier {
    return this._name;
  }

  get $enum(): EnumReference {
    return this._enum;
  }

  override toJSON(): ValueReferenceSpec {
    return {
      kind: 'ValueReference',
      name: [
        this.name.paramCase,
        this.$enum.name.singular.paramCase,
        this.$enum.schema.name.paramCase,
        this.$enum.schema.solution.name.paramCase
      ]
    };
  }

  static override create(json: ValueReferenceSpec): ValueReference {
    const [name, $enum, schema, solution]: [string, string, string, string] = json.name;

    if (!name) {
      throw new Error('invalid value reference');
    }

    if (!$enum) {
      throw new Error('invalid value reference');
    }

    if (!schema) {
      throw new Error('invalid value reference');
    }

    if (!solution) {
      throw new Error('invalid value reference');
    }

    const valueReference: ValueReference = new ValueReference(
      Identifier.create(name),
      EnumReference.create({
        kind: 'EnumReference',
        name: [$enum, schema, solution]
      })
    );

    return valueReference;
  }
}
