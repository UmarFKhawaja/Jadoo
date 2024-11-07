import { serializeJSON } from '.';

describe('serializeJSON', () => {
  it('serializes value to JSON', () => {
    const text: string = serializeJSON<{
      foo: string;
    }>({
      foo: 'Foo'
    });

    expect(text).toEqual(
      `{
  "foo": "Foo"
}`);
  });
});
