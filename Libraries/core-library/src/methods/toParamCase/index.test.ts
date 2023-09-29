import { toParamCase } from '.';

describe('toParamCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const paramCase: string = toParamCase('camelCase');

      expect(paramCase).toEqual('camel-case');
    });

    it('in CONSTANT_CASE', () => {
      const paramCase: string = toParamCase('CONSTANT_CASE');

      expect(paramCase).toEqual('constant-case');
    });

    it('in dot.case', () => {
      const paramCase: string = toParamCase('dot.case');

      expect(paramCase).toEqual('dot-case');
    });

    it('in Header Case', () => {
      const paramCase: string = toParamCase('Header Case');

      expect(paramCase).toEqual('header-case');
    });

    it('in param-case', () => {
      const paramCase: string = toParamCase('param-case');

      expect(paramCase).toEqual('param-case');
    });

    it('in PascalCase', () => {
      const paramCase: string = toParamCase('PascalCase');

      expect(paramCase).toEqual('pascal-case');
    });

    it('in snake_case', () => {
      const paramCase: string = toParamCase('snake_case');

      expect(paramCase).toEqual('snake-case');
    });

    it('in Title Case', () => {
      const paramCase: string = toParamCase('Title Case');

      expect(paramCase).toEqual('title-case');
    });
  });

  describe('should correctly handle string with spaces', () => {
    it('in camelCase', () => {
      const paramCase: string = toParamCase(' camelCase ');

      expect(paramCase).toEqual('camel-case');
    });

    it('in CONSTANT_CASE', () => {
      const paramCase: string = toParamCase(' CONSTANT_CASE ');

      expect(paramCase).toEqual('constant-case');
    });

    it('in dot.case', () => {
      const paramCase: string = toParamCase(' dot.case ');

      expect(paramCase).toEqual('dot-case');
    });

    it('in Header Case', () => {
      const paramCase: string = toParamCase(' Header Case ');

      expect(paramCase).toEqual('header-case');
    });

    it('in param-case', () => {
      const paramCase: string = toParamCase(' param-case ');

      expect(paramCase).toEqual('param-case');
    });

    it('in PascalCase', () => {
      const paramCase: string = toParamCase(' PascalCase ');

      expect(paramCase).toEqual('pascal-case');
    });

    it('in snake_case', () => {
      const paramCase: string = toParamCase(' snake_case ');

      expect(paramCase).toEqual('snake-case');
    });

    it('in Title Case', () => {
      const paramCase: string = toParamCase(' Title Case ');

      expect(paramCase).toEqual('title-case');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('idCamelCase');

        expect(paramCase).toEqual('id-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('ID_CONSTANT_CASE');

        expect(paramCase).toEqual('id-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('id.dot.case');

        expect(paramCase).toEqual('id-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('ID Header Case');

        expect(paramCase).toEqual('id-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('id-param-case');

        expect(paramCase).toEqual('id-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('IDPascalCase');

        expect(paramCase).toEqual('id-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('id_snake_case');

        expect(paramCase).toEqual('id-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('ID Title Case');

        expect(paramCase).toEqual('id-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseID');

        expect(paramCase).toEqual('camel-case-id');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_ID');

        expect(paramCase).toEqual('constant-case-id');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.id');

        expect(paramCase).toEqual('dot-case-id');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case ID');

        expect(paramCase).toEqual('header-case-id');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-id');

        expect(paramCase).toEqual('param-case-id');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseID');

        expect(paramCase).toEqual('pascal-case-id');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_id');

        expect(paramCase).toEqual('snake-case-id');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case ID');

        expect(paramCase).toEqual('title-case-id');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelIDCase');

        expect(paramCase).toEqual('camel-id-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_ID_CASE');

        expect(paramCase).toEqual('constant-id-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.id.case');

        expect(paramCase).toEqual('dot-id-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header ID Case');

        expect(paramCase).toEqual('header-id-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-id-case');

        expect(paramCase).toEqual('param-id-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalIDCase');

        expect(paramCase).toEqual('pascal-id-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_id_case');

        expect(paramCase).toEqual('snake-id-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title ID Case');

        expect(paramCase).toEqual('title-id-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('id');

        expect(paramCase).toEqual('id');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('ID');

        expect(paramCase).toEqual('id');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('id');

        expect(paramCase).toEqual('id');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('ID');

        expect(paramCase).toEqual('id');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('id');

        expect(paramCase).toEqual('id');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('ID');

        expect(paramCase).toEqual('id');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('id');

        expect(paramCase).toEqual('id');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('ID');

        expect(paramCase).toEqual('id');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('idsCamelCase');

        expect(paramCase).toEqual('ids-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('IDS_CONSTANT_CASE');

        expect(paramCase).toEqual('ids-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('ids.dot.case');

        expect(paramCase).toEqual('ids-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('IDs Header Case');

        expect(paramCase).toEqual('ids-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('ids-param-case');

        expect(paramCase).toEqual('ids-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('IDsPascalCase');

        expect(paramCase).toEqual('ids-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('ids_snake_case');

        expect(paramCase).toEqual('ids-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('IDs Title Case');

        expect(paramCase).toEqual('ids-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseIDs');

        expect(paramCase).toEqual('camel-case-ids');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_IDS');

        expect(paramCase).toEqual('constant-case-ids');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.ids');

        expect(paramCase).toEqual('dot-case-ids');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case IDs');

        expect(paramCase).toEqual('header-case-ids');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-ids');

        expect(paramCase).toEqual('param-case-ids');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseIDs');

        expect(paramCase).toEqual('pascal-case-ids');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_ids');

        expect(paramCase).toEqual('snake-case-ids');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case IDs');

        expect(paramCase).toEqual('title-case-ids');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelIDsCase');

        expect(paramCase).toEqual('camel-ids-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_IDS_CASE');

        expect(paramCase).toEqual('constant-ids-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.ids.case');

        expect(paramCase).toEqual('dot-ids-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header IDs Case');

        expect(paramCase).toEqual('header-ids-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-ids-case');

        expect(paramCase).toEqual('param-ids-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalIDsCase');

        expect(paramCase).toEqual('pascal-ids-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_ids_case');

        expect(paramCase).toEqual('snake-ids-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title IDs Case');

        expect(paramCase).toEqual('title-ids-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('ids');

        expect(paramCase).toEqual('ids');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('IDS');

        expect(paramCase).toEqual('ids');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('ids');

        expect(paramCase).toEqual('ids');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('IDs');

        expect(paramCase).toEqual('ids');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('ids');

        expect(paramCase).toEqual('ids');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('IDs');

        expect(paramCase).toEqual('ids');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('ids');

        expect(paramCase).toEqual('ids');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('IDs');

        expect(paramCase).toEqual('ids');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('dbCamelCase');

        expect(paramCase).toEqual('db-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('DB_CONSTANT_CASE');

        expect(paramCase).toEqual('db-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('db.dot.case');

        expect(paramCase).toEqual('db-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('DB Header Case');

        expect(paramCase).toEqual('db-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('db-param-case');

        expect(paramCase).toEqual('db-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('DBPascalCase');

        expect(paramCase).toEqual('db-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('db_snake_case');

        expect(paramCase).toEqual('db-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('DB Title Case');

        expect(paramCase).toEqual('db-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseDB');

        expect(paramCase).toEqual('camel-case-db');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_DB');

        expect(paramCase).toEqual('constant-case-db');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.db');

        expect(paramCase).toEqual('dot-case-db');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case DB');

        expect(paramCase).toEqual('header-case-db');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-db');

        expect(paramCase).toEqual('param-case-db');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseDB');

        expect(paramCase).toEqual('pascal-case-db');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_db');

        expect(paramCase).toEqual('snake-case-db');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case DB');

        expect(paramCase).toEqual('title-case-db');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelDBCase');

        expect(paramCase).toEqual('camel-db-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_DB_CASE');

        expect(paramCase).toEqual('constant-db-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.db.case');

        expect(paramCase).toEqual('dot-db-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header DB Case');

        expect(paramCase).toEqual('header-db-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-db-case');

        expect(paramCase).toEqual('param-db-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalDBCase');

        expect(paramCase).toEqual('pascal-db-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_db_case');

        expect(paramCase).toEqual('snake-db-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title DB Case');

        expect(paramCase).toEqual('title-db-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('db');

        expect(paramCase).toEqual('db');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('DB');

        expect(paramCase).toEqual('db');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('db');

        expect(paramCase).toEqual('db');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('DB');

        expect(paramCase).toEqual('db');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('db');

        expect(paramCase).toEqual('db');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('DB');

        expect(paramCase).toEqual('db');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('db');

        expect(paramCase).toEqual('db');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('DB');

        expect(paramCase).toEqual('db');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('dbsCamelCase');

        expect(paramCase).toEqual('dbs-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('DBS_CONSTANT_CASE');

        expect(paramCase).toEqual('dbs-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dbs.dot.case');

        expect(paramCase).toEqual('dbs-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('DBs Header Case');

        expect(paramCase).toEqual('dbs-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('dbs-param-case');

        expect(paramCase).toEqual('dbs-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('DBsPascalCase');

        expect(paramCase).toEqual('dbs-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('dbs_snake_case');

        expect(paramCase).toEqual('dbs-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('DBs Title Case');

        expect(paramCase).toEqual('dbs-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseDBs');

        expect(paramCase).toEqual('camel-case-dbs');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_DBS');

        expect(paramCase).toEqual('constant-case-dbs');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.dbs');

        expect(paramCase).toEqual('dot-case-dbs');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case DBs');

        expect(paramCase).toEqual('header-case-dbs');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-dbs');

        expect(paramCase).toEqual('param-case-dbs');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseDBs');

        expect(paramCase).toEqual('pascal-case-dbs');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_dbs');

        expect(paramCase).toEqual('snake-case-dbs');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case DBs');

        expect(paramCase).toEqual('title-case-dbs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelDBsCase');

        expect(paramCase).toEqual('camel-dbs-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_DBS_CASE');

        expect(paramCase).toEqual('constant-dbs-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.dbs.case');

        expect(paramCase).toEqual('dot-dbs-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header DBs Case');

        expect(paramCase).toEqual('header-dbs-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-dbs-case');

        expect(paramCase).toEqual('param-dbs-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalDBsCase');

        expect(paramCase).toEqual('pascal-dbs-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_dbs_case');

        expect(paramCase).toEqual('snake-dbs-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title DBs Case');

        expect(paramCase).toEqual('title-dbs-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('dbs');

        expect(paramCase).toEqual('dbs');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('DBS');

        expect(paramCase).toEqual('dbs');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dbs');

        expect(paramCase).toEqual('dbs');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('DBs');

        expect(paramCase).toEqual('dbs');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('dbs');

        expect(paramCase).toEqual('dbs');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('DBs');

        expect(paramCase).toEqual('dbs');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('dbs');

        expect(paramCase).toEqual('dbs');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('DBs');

        expect(paramCase).toEqual('dbs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('graphqlCamelCase');

        expect(paramCase).toEqual('graphql-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('GRAPHQL_CONSTANT_CASE');

        expect(paramCase).toEqual('graphql-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('graphql.dot.case');

        expect(paramCase).toEqual('graphql-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('GraphQL Header Case');

        expect(paramCase).toEqual('graphql-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('graphql-param-case');

        expect(paramCase).toEqual('graphql-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('GraphQLPascalCase');

        expect(paramCase).toEqual('graphql-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('graphql_snake_case');

        expect(paramCase).toEqual('graphql-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('GraphQL Title Case');

        expect(paramCase).toEqual('graphql-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseGraphQL');

        expect(paramCase).toEqual('camel-case-graphql');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_GRAPHQL');

        expect(paramCase).toEqual('constant-case-graphql');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.graphql');

        expect(paramCase).toEqual('dot-case-graphql');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case GraphQL');

        expect(paramCase).toEqual('header-case-graphql');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-graphql');

        expect(paramCase).toEqual('param-case-graphql');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseGraphQL');

        expect(paramCase).toEqual('pascal-case-graphql');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_graphql');

        expect(paramCase).toEqual('snake-case-graphql');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case GraphQL');

        expect(paramCase).toEqual('title-case-graphql');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelGraphQLCase');

        expect(paramCase).toEqual('camel-graphql-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_GRAPHQL_CASE');

        expect(paramCase).toEqual('constant-graphql-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.graphql.case');

        expect(paramCase).toEqual('dot-graphql-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header GraphQL Case');

        expect(paramCase).toEqual('header-graphql-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-graphql-case');

        expect(paramCase).toEqual('param-graphql-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalGraphQLCase');

        expect(paramCase).toEqual('pascal-graphql-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_graphql_case');

        expect(paramCase).toEqual('snake-graphql-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title GraphQL Case');

        expect(paramCase).toEqual('title-graphql-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('graphql');

        expect(paramCase).toEqual('graphql');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('GRAPHQL');

        expect(paramCase).toEqual('graphql');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('graphql');

        expect(paramCase).toEqual('graphql');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('GraphQL');

        expect(paramCase).toEqual('graphql');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('graphql');

        expect(paramCase).toEqual('graphql');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('GraphQL');

        expect(paramCase).toEqual('graphql');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('graphql');

        expect(paramCase).toEqual('graphql');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('GraphQL');

        expect(paramCase).toEqual('graphql');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('typeormCamelCase');

        expect(paramCase).toEqual('typeorm-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('TYPEORM_CONSTANT_CASE');

        expect(paramCase).toEqual('typeorm-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('typeorm.dot.case');

        expect(paramCase).toEqual('typeorm-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('TypeORM Header Case');

        expect(paramCase).toEqual('typeorm-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('typeorm-param-case');

        expect(paramCase).toEqual('typeorm-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('TypeORMPascalCase');

        expect(paramCase).toEqual('typeorm-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('typeorm_snake_case');

        expect(paramCase).toEqual('typeorm-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('TypeORM Title Case');

        expect(paramCase).toEqual('typeorm-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseTypeORM');

        expect(paramCase).toEqual('camel-case-typeorm');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_TYPEORM');

        expect(paramCase).toEqual('constant-case-typeorm');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.typeorm');

        expect(paramCase).toEqual('dot-case-typeorm');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case TypeORM');

        expect(paramCase).toEqual('header-case-typeorm');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-typeorm');

        expect(paramCase).toEqual('param-case-typeorm');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseTypeORM');

        expect(paramCase).toEqual('pascal-case-typeorm');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_typeorm');

        expect(paramCase).toEqual('snake-case-typeorm');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case TypeORM');

        expect(paramCase).toEqual('title-case-typeorm');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelTypeORMCase');

        expect(paramCase).toEqual('camel-typeorm-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_TYPEORM_CASE');

        expect(paramCase).toEqual('constant-typeorm-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.typeorm.case');

        expect(paramCase).toEqual('dot-typeorm-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header TypeORM Case');

        expect(paramCase).toEqual('header-typeorm-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-typeorm-case');

        expect(paramCase).toEqual('param-typeorm-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalTypeORMCase');

        expect(paramCase).toEqual('pascal-typeorm-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_typeorm_case');

        expect(paramCase).toEqual('snake-typeorm-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title TypeORM Case');

        expect(paramCase).toEqual('title-typeorm-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('typeorm');

        expect(paramCase).toEqual('typeorm');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('TYPEORM');

        expect(paramCase).toEqual('typeorm');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('typeorm');

        expect(paramCase).toEqual('typeorm');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('TypeORM');

        expect(paramCase).toEqual('typeorm');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('typeorm');

        expect(paramCase).toEqual('typeorm');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('TypeORM');

        expect(paramCase).toEqual('typeorm');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('typeorm');

        expect(paramCase).toEqual('typeorm');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('TypeORM');

        expect(paramCase).toEqual('typeorm');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('jsonCamelCase');

        expect(paramCase).toEqual('json-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('JSON_CONSTANT_CASE');

        expect(paramCase).toEqual('json-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('json.dot.case');

        expect(paramCase).toEqual('json-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('JSON Header Case');

        expect(paramCase).toEqual('json-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('json-param-case');

        expect(paramCase).toEqual('json-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('JSONPascalCase');

        expect(paramCase).toEqual('json-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('json_snake_case');

        expect(paramCase).toEqual('json-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('JSON Title Case');

        expect(paramCase).toEqual('json-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseJSON');

        expect(paramCase).toEqual('camel-case-json');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_JSON');

        expect(paramCase).toEqual('constant-case-json');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.json');

        expect(paramCase).toEqual('dot-case-json');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case JSON');

        expect(paramCase).toEqual('header-case-json');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-json');

        expect(paramCase).toEqual('param-case-json');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseJSON');

        expect(paramCase).toEqual('pascal-case-json');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_json');

        expect(paramCase).toEqual('snake-case-json');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case JSON');

        expect(paramCase).toEqual('title-case-json');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelJSONCase');

        expect(paramCase).toEqual('camel-json-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_JSON_CASE');

        expect(paramCase).toEqual('constant-json-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.json.case');

        expect(paramCase).toEqual('dot-json-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header JSON Case');

        expect(paramCase).toEqual('header-json-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-json-case');

        expect(paramCase).toEqual('param-json-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalJSONCase');

        expect(paramCase).toEqual('pascal-json-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_json_case');

        expect(paramCase).toEqual('snake-json-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title JSON Case');

        expect(paramCase).toEqual('title-json-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('json');

        expect(paramCase).toEqual('json');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('JSON');

        expect(paramCase).toEqual('json');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('json');

        expect(paramCase).toEqual('json');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('JSON');

        expect(paramCase).toEqual('json');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('json');

        expect(paramCase).toEqual('json');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('JSON');

        expect(paramCase).toEqual('json');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('json');

        expect(paramCase).toEqual('json');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('JSON');

        expect(paramCase).toEqual('json');
      });
    });
  });

  describe('should correctly handle string with special case: UUID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('uuidCamelCase');

        expect(paramCase).toEqual('uuid-camel-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('UUID_CONSTANT_CASE');

        expect(paramCase).toEqual('uuid-constant-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('uuid.dot.case');

        expect(paramCase).toEqual('uuid-dot-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('UUID Header Case');

        expect(paramCase).toEqual('uuid-header-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('uuid-param-case');

        expect(paramCase).toEqual('uuid-param-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('UUIDPascalCase');

        expect(paramCase).toEqual('uuid-pascal-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('uuid_snake_case');

        expect(paramCase).toEqual('uuid-snake-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('UUID Title Case');

        expect(paramCase).toEqual('uuid-title-case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelCaseUUID');

        expect(paramCase).toEqual('camel-case-uuid');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_CASE_UUID');

        expect(paramCase).toEqual('constant-case-uuid');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.case.uuid');

        expect(paramCase).toEqual('dot-case-uuid');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header Case UUID');

        expect(paramCase).toEqual('header-case-uuid');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-case-uuid');

        expect(paramCase).toEqual('param-case-uuid');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalCaseUUID');

        expect(paramCase).toEqual('pascal-case-uuid');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_case_uuid');

        expect(paramCase).toEqual('snake-case-uuid');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title Case UUID');

        expect(paramCase).toEqual('title-case-uuid');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('camelUUIDCase');

        expect(paramCase).toEqual('camel-uuid-case');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('CONSTANT_UUID_CASE');

        expect(paramCase).toEqual('constant-uuid-case');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('dot.uuid.case');

        expect(paramCase).toEqual('dot-uuid-case');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('Header UUID Case');

        expect(paramCase).toEqual('header-uuid-case');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('param-uuid-case');

        expect(paramCase).toEqual('param-uuid-case');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('PascalUUIDCase');

        expect(paramCase).toEqual('pascal-uuid-case');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('snake_uuid_case');

        expect(paramCase).toEqual('snake-uuid-case');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('Title UUID Case');

        expect(paramCase).toEqual('title-uuid-case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const paramCase: string = toParamCase('uuid');

        expect(paramCase).toEqual('uuid');
      });

      it('in CONSTANT_CASE', () => {
        const paramCase: string = toParamCase('UUID');

        expect(paramCase).toEqual('uuid');
      });

      it('in dot.case', () => {
        const paramCase: string = toParamCase('uuid');

        expect(paramCase).toEqual('uuid');
      });

      it('in Header Case', () => {
        const paramCase: string = toParamCase('UUID');

        expect(paramCase).toEqual('uuid');
      });

      it('in param-case', () => {
        const paramCase: string = toParamCase('uuid');

        expect(paramCase).toEqual('uuid');
      });

      it('in PascalCase', () => {
        const paramCase: string = toParamCase('UUID');

        expect(paramCase).toEqual('uuid');
      });

      it('in snake_case', () => {
        const paramCase: string = toParamCase('uuid');

        expect(paramCase).toEqual('uuid');
      });

      it('in Title Case', () => {
        const paramCase: string = toParamCase('UUID');

        expect(paramCase).toEqual('uuid');
      });
    });
  });
});
