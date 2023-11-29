import { Title } from '@jadoo/core-library';
import { Attribute, AttributeSpec } from '../Attribute';
import { Schema } from '../Schema';

export interface EntitySpec {
  kind: 'Entity';
  name: string;
  attributes: AttributeSpec[];
}

export class Entity {
  private readonly _name: Title;

  private readonly _attributes: Attribute[];

  protected constructor(
    name: Title,
    attributes: AttributeSpec[]
  ) {
    this._name = name;
    this._attributes = attributes.map((attribute: AttributeSpec) => Attribute.create(attribute, this));
  }

  get name(): Title {
    return this._name;
  }

  get attributes(): Attribute[] {
    return [
      ...this._attributes
    ];
  }

  toJSON(): EntitySpec {
    return {
      kind: 'Entity',
      name: this.name.singular.paramCase,
      attributes: this.attributes.map((attribute: Attribute) => attribute.toJSON())
    };
  }

  static create(json: EntitySpec, schema: Schema): Entity {
    const name: string = json.name;
    const attributes: AttributeSpec[] = json.attributes;

    if (!name) {
      throw new Error('invalid entity');
    }

    if (!attributes || !attributes.length) {
      throw new Error('invalid entity');
    }

    const entity: Entity = new Entity(
      Title.create(name),
      attributes
    );

    return entity;
  }
}
