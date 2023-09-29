import {
  toCamelCase,
  toConstantCase,
  toDotCase,
  toHeaderCase,
  toParamCase,
  toPascalCase,
  toSnakeCase,
  toTitleCase
} from '../../methods';

export interface IdentifierSpec {
  constantCase: string;
  camelCase: string;
  dotCase: string;
  headerCase: string;
  paramCase: string;
  pascalCase: string;
  snakeCase: string;
  titleCase: string;
}

export class Identifier {
  public static readonly EMPTY: Identifier = Identifier.create('');

  private readonly _constantCase: string;

  private readonly _camelCase: string;

  private readonly _dotCase: string;

  private readonly _headerCase: string;

  private readonly _paramCase: string;

  private readonly _pascalCase: string;

  private readonly _snakeCase: string;

  private readonly _titleCase: string;

  protected constructor(
    constantCase: string,
    camelCase: string,
    dotCase: string,
    headerCase: string,
    paramCase: string,
    pascalCase: string,
    snakeCase: string,
    titleCase: string
  ) {
    this._constantCase = constantCase;
    this._camelCase = camelCase;
    this._dotCase = dotCase;
    this._headerCase = headerCase;
    this._paramCase = paramCase;
    this._pascalCase = pascalCase;
    this._snakeCase = snakeCase;
    this._titleCase = titleCase;
  }

  get constantCase(): string {
    return this._constantCase;
  }

  get camelCase(): string {
    return this._camelCase;
  }

  get dotCase(): string {
    return this._dotCase;
  }

  get headerCase(): string {
    return this._headerCase;
  }

  get paramCase(): string {
    return this._paramCase;
  }

  get pascalCase(): string {
    return this._pascalCase;
  }

  get snakeCase(): string {
    return this._snakeCase;
  }

  get titleCase(): string {
    return this._titleCase;
  }

  get isNullOrEmpty(): boolean {
    return [
      this._snakeCase,
      this._paramCase,
      this._dotCase,
      this._constantCase,
      this._pascalCase,
      this._camelCase,
      this._headerCase,
      this._titleCase
    ]
      .some((value: string) => !value);
  }

  toJSON(): IdentifierSpec {
    return {
      constantCase: this.constantCase,
      camelCase: this.camelCase,
      dotCase: this.dotCase,
      headerCase: this.headerCase,
      paramCase: this.paramCase,
      pascalCase: this.pascalCase,
      snakeCase: this.snakeCase,
      titleCase: this.titleCase
    };
  }

  static create(name: string): Identifier {
    const {
      constantCase,
      camelCase,
      dotCase,
      headerCase,
      paramCase,
      pascalCase,
      snakeCase,
      titleCase
    } = {
      constantCase: toConstantCase(name),
      camelCase: toCamelCase(name),
      dotCase: toDotCase(name),
      headerCase: toHeaderCase(name),
      paramCase: toParamCase(name),
      pascalCase: toPascalCase(name),
      titleCase: toTitleCase(name),
      snakeCase: toSnakeCase(name)
    };

    const identifier: Identifier = new Identifier(
      constantCase,
      camelCase,
      dotCase,
      headerCase,
      paramCase,
      pascalCase,
      snakeCase,
      titleCase
    );

    return identifier;
  }
}
