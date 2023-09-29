import { Title, TitleSpec } from '.';

describe(('Title'), () => {
  describe('EMPTY', () => {
    it('has empty value', () => {
      const title: Title = Title.EMPTY;

      expect(title.isNullOrEmpty).toBe(true);
    });

    it('has empty singular value', () => {
      const title: Title = Title.EMPTY;

      expect(title.singular.isNullOrEmpty).toBe(true);
    });

    it('has empty plural value', () => {
      const title: Title = Title.EMPTY;

      expect(title.plural.isNullOrEmpty).toBe(true);
    });
  });

  describe('toJSON', () => {
    const json: TitleSpec = Title
      .create('World')
      .toJSON();

    it('has title in singular form', () => {
      expect(json).toHaveProperty('singular');
      expect(json.singular).toHaveProperty('constantCase');
      expect(json.singular).toHaveProperty('camelCase');
      expect(json.singular).toHaveProperty('dotCase');
      expect(json.singular).toHaveProperty('headerCase');
      expect(json.singular).toHaveProperty('paramCase');
      expect(json.singular).toHaveProperty('pascalCase');
      expect(json.singular).toHaveProperty('snakeCase');
      expect(json.singular).toHaveProperty('titleCase');
      expect(json.singular.constantCase).toEqual('WORLD');
      expect(json.singular.camelCase).toEqual('world');
      expect(json.singular.dotCase).toEqual('world');
      expect(json.singular.headerCase).toEqual('World');
      expect(json.singular.paramCase).toEqual('world');
      expect(json.singular.pascalCase).toEqual('World');
      expect(json.singular.snakeCase).toEqual('world');
      expect(json.singular.titleCase).toEqual('World');
    });

    it('has title in singular form', () => {
      expect(json).toHaveProperty('plural');
      expect(json.plural).toHaveProperty('constantCase');
      expect(json.plural).toHaveProperty('camelCase');
      expect(json.plural).toHaveProperty('dotCase');
      expect(json.plural).toHaveProperty('headerCase');
      expect(json.plural).toHaveProperty('paramCase');
      expect(json.plural).toHaveProperty('pascalCase');
      expect(json.plural).toHaveProperty('snakeCase');
      expect(json.plural).toHaveProperty('titleCase');
      expect(json.plural.constantCase).toEqual('WORLDS');
      expect(json.plural.camelCase).toEqual('worlds');
      expect(json.plural.dotCase).toEqual('worlds');
      expect(json.plural.headerCase).toEqual('Worlds');
      expect(json.plural.paramCase).toEqual('worlds');
      expect(json.plural.pascalCase).toEqual('Worlds');
      expect(json.plural.snakeCase).toEqual('worlds');
      expect(json.plural.titleCase).toEqual('Worlds');
    });
  });

  describe('create', () => {
    it('has title in singular form', () => {
      const title: Title = Title.create('World');

      expect(title.singular.paramCase).toBe('world');
    });

    it('has title in plural form', () => {
      const title: Title = Title.create('World');

      expect(title.plural.paramCase).toBe('worlds');
    });
  });
});
