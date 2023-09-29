import { isEmpty } from 'lodash';
import { joinLines } from '../../methods';

export interface BlockSpec {
  lines: string[];
}

export class Block {
  public static readonly EMPTY: Block = Block.create();

  public static readonly BLANK: Block = Block.create('');

  private readonly _lines: string[];

  protected constructor(
    lines: string[]
  ) {
    this._lines = [
      ...lines
    ];
  }

  get isEmpty(): boolean {
    return this.lines.length === 0;
  }

  get isNotEmpty(): boolean {
    return this.lines.length !== 0;
  }

  get lines(): string[] {
    return this._lines;
  }

  indent(): Block {
    return Block.create(...this.lines.map((line: string): string => isEmpty(line) ? line : `  ${ line }`));
  }

  toJSON(): BlockSpec {
    return {
      lines: this._lines
    };
  }

  static create(...lines: string[]): Block {
    return new Block(lines);
  }

  static concatenate(...blocks: Block[]): Block {
    return Block.create(
      ...blocks.reduce((blocks: string[], block: Block): string[] => {
        return blocks.concat(block.lines);
      }, [])
    );
  }

  static space(...blocks: Block[]): Block[] {
    const blankBlock: Block = Block.BLANK;

    const concatenateBlocks: (blocks: Block[], block: Block) => Block[] = (blocks: Block[], block: Block): Block[] => {
      if (blocks.length === 0) {
        return blocks.concat(block);
      } else {
        return blocks.concat([blankBlock, block]);
      }
    };

    return blocks.filter((block: Block) => block.isNotEmpty).reduce(concatenateBlocks, []);
  }
}
