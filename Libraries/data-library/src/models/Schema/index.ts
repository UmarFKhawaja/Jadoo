import { Identifier } from '@jadoo/core-library';
import { Entity, EntitySpec } from '../Entity';
import { Enum, EnumSpec } from '../Enum';
import { Solution } from '../Solution';

export interface SchemaSpec {
  kind: 'Schema';
  name: string;
  entities?: EntitySpec[];
  enums?: EnumSpec[];
}

export class Schema {
  private readonly _name: Identifier;

  private readonly _entities: Entity[];

  private readonly _enums: Enum[];

  protected constructor(
    name: Identifier,
    entities: EntitySpec[],
    enums: EnumSpec[]
  ) {
    this._name = name;
    this._entities = entities.map((entity: EntitySpec) => Entity.create(entity, this));
    this._enums = enums.map(($enum: EnumSpec) => Enum.create($enum, this));
  }

  get name(): Identifier {
    return this._name;
  }

  get entities(): Entity[] {
    return [
      ...this._entities
    ];
  }

  get enums(): Enum[] {
    return [
      ...this._enums
    ];
  }

  static create(json: SchemaSpec, solution: Solution): Schema {
    const name: string = json.name;
    const entities: EntitySpec[] = json.entities || [];
    const enums: EnumSpec[] = json.enums || [];

    if (!name) {
      throw new Error('invalid schema');
    }

    const schema: Schema = new Schema(
      Identifier.create(name),
      entities,
      enums
    );

    return schema;
  }
}
