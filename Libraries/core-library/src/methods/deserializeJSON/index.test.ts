import { deserializeJSON } from '.';

describe('deserializeJSON', () => {
  it('deserializes JSON to value', () => {
    const foo = deserializeJSON<{
      foo: string
    }>('{"foo":"Foo"}');

    expect(foo).toEqual({
      foo: 'Foo'
    });
  });
});