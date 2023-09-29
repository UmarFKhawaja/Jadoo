import { toPluralForm, toSingularForm } from '../../methods';
import { Identifier, IdentifierSpec } from '../Identifier';

export interface TitleSpec {
  singular: IdentifierSpec;
  plural: IdentifierSpec;
}

export class Title {
  public static readonly EMPTY: Title = Title.create('');

  private readonly _singular: Identifier;

  private readonly _plural: Identifier;

  protected constructor(
    singular: Identifier,
    plural: Identifier
  ) {
    this._singular = singular;
    this._plural = plural;
  }

  get singular(): Identifier {
    return this._singular;
  }

  get plural(): Identifier {
    return this._plural;
  }

  get isNullOrEmpty(): boolean {
    return [
      this._singular,
      this._plural
    ]
      .every((value: Identifier) => value.isNullOrEmpty);
  }

  toJSON(): TitleSpec {
    return {
      singular: this._singular.toJSON(),
      plural: this._plural.toJSON()
    };
  }

  static create(name: string): Title {
    const {
      singularForm,
      pluralForm
    } = {
      singularForm: toSingularForm(name),
      pluralForm: toPluralForm(name)
    };

    const title: Title = new Title(
      Identifier.create(singularForm),
      Identifier.create(pluralForm)
    );

    return title;
  }
}
