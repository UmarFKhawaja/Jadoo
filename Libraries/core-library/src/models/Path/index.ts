export class Path {
  private readonly _name: string;

  protected constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  static create(name: string): Path {
    const path: Path = new Path(name);

    return path;
  }
}
