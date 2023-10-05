export type OptionsKind =
  | 'InputOptions'
  | 'OutputOptions'
  | 'GenerateOptions'
  | 'TransformOptions';

export type OptionsSpec =
  | InputOptionsSpec
  | OutputOptionsSpec
  | GenerateOptionsSpec
  | TransformOptionsSpec;

export interface InputOptionsSpec {
  kind: 'InputOptions';
  sourceDir: string;
}

export interface OutputOptionsSpec {
  kind: 'OutputOptions';
  targetDir: string;
}

export interface GenerateOptionsSpec {
  kind: 'GenerateOptions';
}

export interface TransformOptionsSpec {
  kind: 'TransformOptions';
}

export abstract class Options {
  protected constructor() {
  }

  abstract toJSON(): OptionsSpec;
}

export abstract class InputOptions extends Options {
  private readonly _sourceDir: string;

  protected constructor(sourceDir: string) {
    super();

    this._sourceDir = sourceDir;
  }

  get sourceDir(): string {
    return this._sourceDir;
  }

  override toJSON(): InputOptionsSpec {
    return {
      kind: 'InputOptions',
      sourceDir: this.sourceDir
    };
  }
}

export abstract class OutputOptions extends Options {
  private readonly _targetDir: string;

  protected constructor(targetDir: string) {
    super();

    this._targetDir = targetDir;
  }

  get targetDir(): string {
    return this._targetDir;
  }

  override toJSON(): OutputOptionsSpec {
    return {
      kind: 'OutputOptions',
      targetDir: this.targetDir
    };
  }
}

export abstract class GenerateOptions extends Options {
  protected constructor() {
    super();
  }

  override toJSON(): GenerateOptionsSpec {
    return {
      kind: 'GenerateOptions'
    };
  }
}

export abstract class TransformOptions extends Options {
  protected constructor() {
    super();
  }

  override toJSON(): TransformOptionsSpec {
    return {
      kind: 'TransformOptions'
    };
  }
}
