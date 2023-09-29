import { toPluralForm } from '.';

describe('toPluralForm', () => {
  it('has been tested in the base library', () => {
    const pluralForm: string = toPluralForm('banana');

    expect(pluralForm).toEqual('bananas');
  });
});
