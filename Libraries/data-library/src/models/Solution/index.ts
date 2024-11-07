import { Identifier } from '@jadoo/core-library';
import { Schema, SchemaSpec } from '../Schema';

export interface SolutionSpec {
  kind: 'Solution';
  name: string;
  schemas: SchemaSpec[];
}

export class Solution {
  private readonly _name: Identifier;

  private readonly _schemas: Schema[];

  protected constructor(
    name: Identifier,
    schemas: SchemaSpec[]
  ) {
    this._name = name;
    this._schemas = schemas.map((schema: SchemaSpec) => Schema.create(schema, this));
  }

  get name(): Identifier {
    return this._name;
  }

  get schemas(): Schema[] {
    return [
      ...this._schemas
    ];
  }

  toJSON(): SolutionSpec {
    return {
      kind: 'Solution',
      name: this.name.paramCase,
      schemas: this.schemas.map((schema: Schema) => schema.toJSON())
    };
  }

  static create(json: SolutionSpec): Solution {
    const name: string = json.name;
    const schemas: SchemaSpec[] = json.schemas;

    if (!name) {
      throw new Error('invalid solution');
    }

    const solution: Solution = new Solution(
      Identifier.create(name),
      schemas
    );

    return solution;
  }
}
