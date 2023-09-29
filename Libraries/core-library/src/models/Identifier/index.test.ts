import { Identifier } from '.';

describe(('Identifier'), () => {
  describe('EMPTY', () => {
    it('has empty value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      expect(identifier.isNullOrEmpty).toBe(true);
    });

    it('has empty constantCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const constantCase: string = identifier.constantCase;

      expect(constantCase).toBe('');
    });

    it('has empty camelCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const camelCase: string = identifier.camelCase;

      expect(camelCase).toBe('');
    });

    it('has empty dotCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const dotCase: string = identifier.dotCase;

      expect(dotCase).toBe('');
    });

    it('has empty headerCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const headerCase: string = identifier.headerCase;

      expect(headerCase).toBe('');
    });

    it('has empty paramCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const paramCase: string = identifier.paramCase;

      expect(paramCase).toBe('');
    });

    it('has empty pascalCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const pascalCase: string = identifier.pascalCase;

      expect(pascalCase).toBe('');
    });

    it('has empty snakeCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const snakeCase: string = identifier.snakeCase;

      expect(snakeCase).toBe('');
    });

    it('has empty titleCase value', () => {
      const identifier: Identifier = Identifier.EMPTY;

      const titleCase: string = identifier.titleCase;

      expect(titleCase).toBe('');
    });
  });

  describe('toJSON', () => {
    const json = Identifier
      .create('account-type')
      .toJSON();

    it('has identifier in CONSTANT_CASE', () => {
      expect(json).toHaveProperty('constantCase');
      expect(json.constantCase).toEqual('ACCOUNT_TYPE')
    });

    it('has identifier in camelCase', () => {
      expect(json).toHaveProperty('camelCase');
      expect(json.camelCase).toEqual('accountType')
    });

    it('has identifier in dot.case', () => {
      expect(json).toHaveProperty('dotCase');
      expect(json.dotCase).toEqual('account.type')
    });

    it('has identifier in Header-Case', () => {
      expect(json).toHaveProperty('headerCase');
      expect(json.headerCase).toEqual('Account-Type')
    });

    it('has identifier in param-case', () => {
      expect(json).toHaveProperty('paramCase');
      expect(json.paramCase).toEqual('account-type')
    });

    it('has identifier in PascalCase', () => {
      expect(json).toHaveProperty('pascalCase');
      expect(json.pascalCase).toEqual('AccountType')
    });

    it('has identifier in snake_case', () => {
      expect(json).toHaveProperty('snakeCase');
      expect(json.snakeCase).toEqual('account_type')
    });

    it('has identifier in Title Case', () => {
      expect(json).toHaveProperty('titleCase');
      expect(json.titleCase).toEqual('Account Type')
    });
  });

  describe('create', () => {
    it('does not have an empty value', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      expect(identifier.isNullOrEmpty).toBe(false);
    });

    it('has name in constantCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const constantCase: string = identifier.constantCase;

      expect(constantCase).toBe('HELLO_WORLD');
    });

    it('has name in camelCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const camelCase: string = identifier.camelCase;

      expect(camelCase).toBe('helloWorld');
    });

    it('has name in dotCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const dotCase: string = identifier.dotCase;

      expect(dotCase).toBe('hello.world');
    });

    it('has name in headerCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const headerCase: string = identifier.headerCase;

      expect(headerCase).toBe('Hello-World');
    });

    it('has name in paramCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const paramCase: string = identifier.paramCase;

      expect(paramCase).toBe('hello-world');
    });

    it('has name in pascalCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const pascalCase: string = identifier.pascalCase;

      expect(pascalCase).toBe('HelloWorld');
    });

    it('has name in snakeCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const snakeCase: string = identifier.snakeCase;

      expect(snakeCase).toBe('hello_world');
    });

    it('has name in titleCase case', () => {
      const identifier: Identifier = Identifier.create('Hello World');

      const titleCase: string = identifier.titleCase;

      expect(titleCase).toBe('Hello World');
    });
  });
});
