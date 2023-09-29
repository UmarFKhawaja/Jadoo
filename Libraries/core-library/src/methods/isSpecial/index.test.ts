import { isSpecial } from '.';

type Special = {
  first: string,
  last: string
};

describe('isSpecial', () => {
  it('identifies a Special correctly', () => {
    const result: boolean = isSpecial<Special>({
      yes: {
        first: 'First',
        last: 'Last'
      }
    }, 'yes')

    expect(result).toEqual(true);
  });

  it('does not identify a Special correctly', () => {
    const result: boolean = isSpecial<Special>({
      yes: {
        first: 'First',
        last: 'Last'
      }
    }, 'no')

    expect(result).toEqual(false);
  });
});