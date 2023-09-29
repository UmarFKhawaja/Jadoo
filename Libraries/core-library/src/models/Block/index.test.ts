import { Block } from '.';

describe('Block', () => {
  describe('EMPTY', () => {
    it('has no lines', () => {
      const block: Block = Block.EMPTY;

      expect(block.lines.length).toEqual(0);
    });
  });

  describe('BLANK', () => {
    it('has 1 blank line', () => {
      const block: Block = Block.BLANK;

      expect(block.lines.length).toEqual(1);
      expect(block.lines[0]).toEqual('');
    });
  });

  describe('isEmpty', () => {
    it('returns true for EMPTY block', () => {
      const block: Block = Block.EMPTY;

      expect(block.isEmpty).toEqual(true);
    });

    it('returns false for EMPTY block', () => {
      const block: Block = Block.BLANK;

      expect(block.isEmpty).toEqual(false);
    });
  });

  describe('isNotEmpty', () => {
    it('returns false for EMPTY block', () => {
      const block: Block = Block.EMPTY;

      expect(block.isNotEmpty).toEqual(false);
    });

    it('returns true for EMPTY block', () => {
      const block: Block = Block.BLANK;

      expect(block.isNotEmpty).toEqual(true);
    });
  });

  describe('indent', () => {
    it('indents the given Block', () => {
      const block: Block = Block.create(
        'alpha bravo charlie',
        '',
        'golf mother tango'
      ).indent();

      expect(block.lines.length).toEqual(3);
      expect(block.lines[0]).toEqual('  alpha bravo charlie');
      expect(block.lines[1]).toEqual('');
      expect(block.lines[2]).toEqual('  golf mother tango');
    });
  });

  describe('create', () => {
    it('returns a Block with the lines it is created with', () => {
      const block: Block = Block.create(
        'the forgotten minority',
        'he got rich overnight',
        'good for you'
      );

      expect(block.lines.length).toEqual(3);
      expect(block.lines[0]).toEqual('the forgotten minority');
      expect(block.lines[1]).toEqual('he got rich overnight');
      expect(block.lines[2]).toEqual('good for you');
    });
  });

  describe('concatenate', () => {
    it('returns a Block which is a concatenation of given Blocks', () => {
      const block: Block = Block.concatenate(
        Block.create(
          'alpha bravo charlie'
        ),
        Block.create(
          'golf mother tango',
          '',
          'horse radish trombone'
        ),
        Block.create(
          'making a copy',
          'fair enough'
        )
      );

      expect(block.lines.length).toEqual(6);
      expect(block.lines[0]).toEqual('alpha bravo charlie');
      expect(block.lines[1]).toEqual('golf mother tango');
      expect(block.lines[2]).toEqual('');
      expect(block.lines[3]).toEqual('horse radish trombone');
      expect(block.lines[4]).toEqual('making a copy');
      expect(block.lines[5]).toEqual('fair enough');
    });
  });

  describe('space', () => {
    it('returns Blocks which have a blank Block in between the given Blocks', () => {
      const blocks: Block[] = Block.space(
        Block.create(
          'alpha bravo charlie'
        ),
        Block.create(
          'golf mother tango',
          '',
          'horse radish trombone'
        ),
        Block.create(
          'making a copy',
          'fair enough'
        )
      );

      expect(blocks.length).toEqual(5);
      expect(blocks[0]!.lines.length).toEqual(1);
      expect(blocks[0]!.lines[0]).toEqual('alpha bravo charlie');
      expect(blocks[1]!.lines.length).toEqual(1);
      expect(blocks[1]!.lines[0]).toEqual('');
      expect(blocks[2]!.lines.length).toEqual(3);
      expect(blocks[2]!.lines[0]).toEqual('golf mother tango');
      expect(blocks[2]!.lines[1]).toEqual('');
      expect(blocks[2]!.lines[2]).toEqual('horse radish trombone');
      expect(blocks[3]!.lines.length).toEqual(1);
      expect(blocks[3]!.lines[0]).toEqual('');
      expect(blocks[4]!.lines.length).toEqual(2);
      expect(blocks[4]!.lines[0]).toEqual('making a copy');
      expect(blocks[4]!.lines[1]).toEqual('fair enough');
    });
  });
});
