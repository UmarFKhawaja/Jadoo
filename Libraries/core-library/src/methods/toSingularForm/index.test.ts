import { toSingularForm } from '.';

describe('toSingularForm', () => {
  it('has been tested in the base library', () => {
    const singularForm: string = toSingularForm('bananas');

    expect(singularForm).toEqual('banana');
  });
});
