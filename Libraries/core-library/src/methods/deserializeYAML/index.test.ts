import { deserializeYAML } from '.';

describe('deserializeYAML', () => {
  it('deserializes YAML to value', () => {
    const foo = deserializeYAML<{
      foo: string
    }>('foo: Foo');

    expect(foo).toEqual({
      foo: 'Foo'
    });
  });
});