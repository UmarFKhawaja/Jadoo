import { serializeYAML } from '.';

describe('serializeYAML', () => {
  it('serializes value to YAML', () => {
    const text: string = serializeYAML<{
      foo: string;
    }>({
      foo: 'Foo'
    });

    console.log(text);

    expect(text).toEqual(`foo: Foo`);
  });
});
