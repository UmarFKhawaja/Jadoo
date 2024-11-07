import { toHeaderCase } from '.';

describe('toHeaderCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const headerCase: string = toHeaderCase('camelCase');

      expect(headerCase).toEqual('Camel-Case');
    });

    it('in CONSTANT_CASE', () => {
      const headerCase: string = toHeaderCase('CONSTANT_CASE');

      expect(headerCase).toEqual('Constant-Case');
    });

    it('in dot.case', () => {
      const headerCase: string = toHeaderCase('dot.case');

      expect(headerCase).toEqual('Dot-Case');
    });

    it('in Header Case', () => {
      const headerCase: string = toHeaderCase('Header Case');

      expect(headerCase).toEqual('Header-Case');
    });

    it('in param-case', () => {
      const headerCase: string = toHeaderCase('param-case');

      expect(headerCase).toEqual('Param-Case');
    });

    it('in PascalCase', () => {
      const headerCase: string = toHeaderCase('PascalCase');

      expect(headerCase).toEqual('Pascal-Case');
    });

    it('in snake_case', () => {
      const headerCase: string = toHeaderCase('snake_case');

      expect(headerCase).toEqual('Snake-Case');
    });

    it('in Title Case', () => {
      const headerCase: string = toHeaderCase('Title Case');

      expect(headerCase).toEqual('Title-Case');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('idCamelCase');

        expect(headerCase).toEqual('ID-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('ID_CONSTANT_CASE');

        expect(headerCase).toEqual('ID-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('id.dot.case');

        expect(headerCase).toEqual('ID-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('ID Header Case');

        expect(headerCase).toEqual('ID-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('id-param-case');

        expect(headerCase).toEqual('ID-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('IDPascalCase');

        expect(headerCase).toEqual('ID-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('id_snake_case');

        expect(headerCase).toEqual('ID-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('ID Title Case');

        expect(headerCase).toEqual('ID-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseID');

        expect(headerCase).toEqual('Camel-Case-ID');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_ID');

        expect(headerCase).toEqual('Constant-Case-ID');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.id');

        expect(headerCase).toEqual('Dot-Case-ID');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case ID');

        expect(headerCase).toEqual('Header-Case-ID');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-id');

        expect(headerCase).toEqual('Param-Case-ID');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('Pascal Case ID');

        expect(headerCase).toEqual('Pascal-Case-ID');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_id');

        expect(headerCase).toEqual('Snake-Case-ID');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case ID');

        expect(headerCase).toEqual('Title-Case-ID');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelIDCase');

        expect(headerCase).toEqual('Camel-ID-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_ID_CASE');

        expect(headerCase).toEqual('Constant-ID-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.id.case');

        expect(headerCase).toEqual('Dot-ID-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header ID Case');

        expect(headerCase).toEqual('Header-ID-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-id-case');

        expect(headerCase).toEqual('Param-ID-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalIDCase');

        expect(headerCase).toEqual('Pascal-ID-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_id_case');

        expect(headerCase).toEqual('Snake-ID-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title ID Case');

        expect(headerCase).toEqual('Title-ID-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('id');

        expect(headerCase).toEqual('ID');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('ID');

        expect(headerCase).toEqual('ID');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('id');

        expect(headerCase).toEqual('ID');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('ID');

        expect(headerCase).toEqual('ID');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('id');

        expect(headerCase).toEqual('ID');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('ID');

        expect(headerCase).toEqual('ID');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('id');

        expect(headerCase).toEqual('ID');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('ID');

        expect(headerCase).toEqual('ID');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('idsCamelCase');

        expect(headerCase).toEqual('IDs-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('IDS_CONSTANT_CASE');

        expect(headerCase).toEqual('IDs-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('ids.dot.case');

        expect(headerCase).toEqual('IDs-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('IDs Header Case');

        expect(headerCase).toEqual('IDs-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('ids-param-case');

        expect(headerCase).toEqual('IDs-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('IDsPascalCase');

        expect(headerCase).toEqual('IDs-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('ids_snake_case');

        expect(headerCase).toEqual('IDs-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('IDs Title Case');

        expect(headerCase).toEqual('IDs-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseIDs');

        expect(headerCase).toEqual('Camel-Case-IDs');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_IDS');

        expect(headerCase).toEqual('Constant-Case-IDs');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.ids');

        expect(headerCase).toEqual('Dot-Case-IDs');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case IDs');

        expect(headerCase).toEqual('Header-Case-IDs');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-ids');

        expect(headerCase).toEqual('Param-Case-IDs');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('Pascal Case IDs');

        expect(headerCase).toEqual('Pascal-Case-IDs');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_ids');

        expect(headerCase).toEqual('Snake-Case-IDs');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case IDs');

        expect(headerCase).toEqual('Title-Case-IDs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelIDsCase');

        expect(headerCase).toEqual('Camel-IDs-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_IDS_CASE');

        expect(headerCase).toEqual('Constant-IDs-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.ids.case');

        expect(headerCase).toEqual('Dot-IDs-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header IDs Case');

        expect(headerCase).toEqual('Header-IDs-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-ids-case');

        expect(headerCase).toEqual('Param-IDs-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('Pascal IDs Case');

        expect(headerCase).toEqual('Pascal-IDs-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_ids_case');

        expect(headerCase).toEqual('Snake-IDs-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title IDs Case');

        expect(headerCase).toEqual('Title-IDs-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('ids');

        expect(headerCase).toEqual('IDs');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('IDS');

        expect(headerCase).toEqual('IDs');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('ids');

        expect(headerCase).toEqual('IDs');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('IDs');

        expect(headerCase).toEqual('IDs');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('ids');

        expect(headerCase).toEqual('IDs');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('IDs');

        expect(headerCase).toEqual('IDs');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('ids');

        expect(headerCase).toEqual('IDs');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('IDs');

        expect(headerCase).toEqual('IDs');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('dbCamelCase');

        expect(headerCase).toEqual('DB-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('DB_CONSTANT_CASE');

        expect(headerCase).toEqual('DB-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('db.dot.case');

        expect(headerCase).toEqual('DB-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('DB Header Case');

        expect(headerCase).toEqual('DB-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('db-param-case');

        expect(headerCase).toEqual('DB-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('DBPascalCase');

        expect(headerCase).toEqual('DB-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('db_snake_case');

        expect(headerCase).toEqual('DB-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('DB Title Case');

        expect(headerCase).toEqual('DB-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseDB');

        expect(headerCase).toEqual('Camel-Case-DB');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_DB');

        expect(headerCase).toEqual('Constant-Case-DB');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.db');

        expect(headerCase).toEqual('Dot-Case-DB');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case DB');

        expect(headerCase).toEqual('Header-Case-DB');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-db');

        expect(headerCase).toEqual('Param-Case-DB');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalCaseDB');

        expect(headerCase).toEqual('Pascal-Case-DB');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_db');

        expect(headerCase).toEqual('Snake-Case-DB');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case DB');

        expect(headerCase).toEqual('Title-Case-DB');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelDBCase');

        expect(headerCase).toEqual('Camel-DB-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_DB_CASE');

        expect(headerCase).toEqual('Constant-DB-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.db.case');

        expect(headerCase).toEqual('Dot-DB-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header DB Case');

        expect(headerCase).toEqual('Header-DB-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-db-case');

        expect(headerCase).toEqual('Param-DB-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalDBCase');

        expect(headerCase).toEqual('Pascal-DB-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_db_case');

        expect(headerCase).toEqual('Snake-DB-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title DB Case');

        expect(headerCase).toEqual('Title-DB-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('db');

        expect(headerCase).toEqual('DB');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('DB');

        expect(headerCase).toEqual('DB');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('db');

        expect(headerCase).toEqual('DB');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('DB');

        expect(headerCase).toEqual('DB');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('db');

        expect(headerCase).toEqual('DB');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('DB');

        expect(headerCase).toEqual('DB');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('db');

        expect(headerCase).toEqual('DB');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('DB');

        expect(headerCase).toEqual('DB');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('dbsCamelCase');

        expect(headerCase).toEqual('DBs-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('DBS_CONSTANT_CASE');

        expect(headerCase).toEqual('DBs-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dbs.dot.case');

        expect(headerCase).toEqual('DBs-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('DBs Header Case');

        expect(headerCase).toEqual('DBs-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('dbs-param-case');

        expect(headerCase).toEqual('DBs-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('DBsPascalCase');

        expect(headerCase).toEqual('DBs-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('dbs_snake_case');

        expect(headerCase).toEqual('DBs-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('DBs Title Case');

        expect(headerCase).toEqual('DBs-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseDBs');

        expect(headerCase).toEqual('Camel-Case-DBs');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_DBS');

        expect(headerCase).toEqual('Constant-Case-DBs');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.dbs');

        expect(headerCase).toEqual('Dot-Case-DBs');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case DBs');

        expect(headerCase).toEqual('Header-Case-DBs');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-dbs');

        expect(headerCase).toEqual('Param-Case-DBs');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalCaseDBs');

        expect(headerCase).toEqual('Pascal-Case-DBs');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_dbs');

        expect(headerCase).toEqual('Snake-Case-DBs');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case DBs');

        expect(headerCase).toEqual('Title-Case-DBs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelDBsCase');

        expect(headerCase).toEqual('Camel-DBs-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_DBS_CASE');

        expect(headerCase).toEqual('Constant-DBs-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.dbs.case');

        expect(headerCase).toEqual('Dot-DBs-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header DBs Case');

        expect(headerCase).toEqual('Header-DBs-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-dbs-case');

        expect(headerCase).toEqual('Param-DBs-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalDBsCase');

        expect(headerCase).toEqual('Pascal-DBs-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_dbs_case');

        expect(headerCase).toEqual('Snake-DBs-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title DBs Case');

        expect(headerCase).toEqual('Title-DBs-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('dbs');

        expect(headerCase).toEqual('DBs');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('DBS');

        expect(headerCase).toEqual('DBs');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dbs');

        expect(headerCase).toEqual('DBs');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('DBs');

        expect(headerCase).toEqual('DBs');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('dbs');

        expect(headerCase).toEqual('DBs');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('DBs');

        expect(headerCase).toEqual('DBs');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('dbs');

        expect(headerCase).toEqual('DBs');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('DBs');

        expect(headerCase).toEqual('DBs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('graphqlCamelCase');

        expect(headerCase).toEqual('GraphQL-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('GRAPHQL_CONSTANT_CASE');

        expect(headerCase).toEqual('GraphQL-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('graphql.dot.case');

        expect(headerCase).toEqual('GraphQL-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('GraphQL Header Case');

        expect(headerCase).toEqual('GraphQL-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('graphql-param-case');

        expect(headerCase).toEqual('GraphQL-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('GraphQLPascalCase');

        expect(headerCase).toEqual('GraphQL-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('graphql_snake_case');

        expect(headerCase).toEqual('GraphQL-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('GraphQL Title Case');

        expect(headerCase).toEqual('GraphQL-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseGraphQL');

        expect(headerCase).toEqual('Camel-Case-GraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_GRAPHQL');

        expect(headerCase).toEqual('Constant-Case-GraphQL');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.graphql');

        expect(headerCase).toEqual('Dot-Case-GraphQL');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case GraphQL');

        expect(headerCase).toEqual('Header-Case-GraphQL');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-graphql');

        expect(headerCase).toEqual('Param-Case-GraphQL');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalCaseGraphQL');

        expect(headerCase).toEqual('Pascal-Case-GraphQL');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_graphql');

        expect(headerCase).toEqual('Snake-Case-GraphQL');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case GraphQL');

        expect(headerCase).toEqual('Title-Case-GraphQL');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelGraphQLCase');

        expect(headerCase).toEqual('Camel-GraphQL-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_GRAPHQL_CASE');

        expect(headerCase).toEqual('Constant-GraphQL-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.graphql.case');

        expect(headerCase).toEqual('Dot-GraphQL-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header GraphQL Case');

        expect(headerCase).toEqual('Header-GraphQL-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-graphql-case');

        expect(headerCase).toEqual('Param-GraphQL-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalGraphQLCase');

        expect(headerCase).toEqual('Pascal-GraphQL-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_graphql_case');

        expect(headerCase).toEqual('Snake-GraphQL-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title GraphQL Case');

        expect(headerCase).toEqual('Title-GraphQL-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('graphql');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('GRAPHQL');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('graphql');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('GraphQL');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('graphql');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('GraphQL');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('graphql');

        expect(headerCase).toEqual('GraphQL');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('GraphQL');

        expect(headerCase).toEqual('GraphQL');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('typeormCamelCase');

        expect(headerCase).toEqual('TypeORM-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('TYPEORM_CONSTANT_CASE');

        expect(headerCase).toEqual('TypeORM-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('typeorm.dot.case');

        expect(headerCase).toEqual('TypeORM-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('TypeORM Header Case');

        expect(headerCase).toEqual('TypeORM-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('typeorm-param-case');

        expect(headerCase).toEqual('TypeORM-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('TypeORMPascalCase');

        expect(headerCase).toEqual('TypeORM-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('typeorm_snake_case');

        expect(headerCase).toEqual('TypeORM-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('TypeORM Title Case');

        expect(headerCase).toEqual('TypeORM-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseTypeORM');

        expect(headerCase).toEqual('Camel-Case-TypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_TYPEORM');

        expect(headerCase).toEqual('Constant-Case-TypeORM');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.typeorm');

        expect(headerCase).toEqual('Dot-Case-TypeORM');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case TypeORM');

        expect(headerCase).toEqual('Header-Case-TypeORM');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-typeorm');

        expect(headerCase).toEqual('Param-Case-TypeORM');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalCaseTypeORM');

        expect(headerCase).toEqual('Pascal-Case-TypeORM');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_typeorm');

        expect(headerCase).toEqual('Snake-Case-TypeORM');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case TypeORM');

        expect(headerCase).toEqual('Title-Case-TypeORM');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelTypeORMCase');

        expect(headerCase).toEqual('Camel-TypeORM-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_TYPEORM_CASE');

        expect(headerCase).toEqual('Constant-TypeORM-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.typeorm.case');

        expect(headerCase).toEqual('Dot-TypeORM-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header TypeORM Case');

        expect(headerCase).toEqual('Header-TypeORM-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-typeorm-case');

        expect(headerCase).toEqual('Param-TypeORM-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalTypeORMCase');

        expect(headerCase).toEqual('Pascal-TypeORM-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_typeorm_case');

        expect(headerCase).toEqual('Snake-TypeORM-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title TypeORM Case');

        expect(headerCase).toEqual('Title-TypeORM-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('typeorm');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('TYPEORM');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('typeorm');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('TypeORM');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('typeorm');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('TypeORM');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('typeorm');

        expect(headerCase).toEqual('TypeORM');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('TypeORM');

        expect(headerCase).toEqual('TypeORM');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('jsonCamelCase');

        expect(headerCase).toEqual('JSON-Camel-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('JSON_CONSTANT_CASE');

        expect(headerCase).toEqual('JSON-Constant-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('json.dot.case');

        expect(headerCase).toEqual('JSON-Dot-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('JSON Header Case');

        expect(headerCase).toEqual('JSON-Header-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('json-param-case');

        expect(headerCase).toEqual('JSON-Param-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('JSONPascalCase');

        expect(headerCase).toEqual('JSON-Pascal-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('json_snake_case');

        expect(headerCase).toEqual('JSON-Snake-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('JSON Title Case');

        expect(headerCase).toEqual('JSON-Title-Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelCaseJSON');

        expect(headerCase).toEqual('Camel-Case-JSON');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_CASE_JSON');

        expect(headerCase).toEqual('Constant-Case-JSON');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.case.json');

        expect(headerCase).toEqual('Dot-Case-JSON');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header Case JSON');

        expect(headerCase).toEqual('Header-Case-JSON');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-case-json');

        expect(headerCase).toEqual('Param-Case-JSON');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalCaseJSON');

        expect(headerCase).toEqual('Pascal-Case-JSON');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_case_json');

        expect(headerCase).toEqual('Snake-Case-JSON');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title Case JSON');

        expect(headerCase).toEqual('Title-Case-JSON');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('camelJSONCase');

        expect(headerCase).toEqual('Camel-JSON-Case');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('CONSTANT_JSON_CASE');

        expect(headerCase).toEqual('Constant-JSON-Case');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('dot.json.case');

        expect(headerCase).toEqual('Dot-JSON-Case');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('Header JSON Case');

        expect(headerCase).toEqual('Header-JSON-Case');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('param-json-case');

        expect(headerCase).toEqual('Param-JSON-Case');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('PascalJSONCase');

        expect(headerCase).toEqual('Pascal-JSON-Case');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('snake_json_case');

        expect(headerCase).toEqual('Snake-JSON-Case');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('Title JSON Case');

        expect(headerCase).toEqual('Title-JSON-Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const headerCase: string = toHeaderCase('json');

        expect(headerCase).toEqual('JSON');
      });

      it('in CONSTANT_CASE', () => {
        const headerCase: string = toHeaderCase('JSON');

        expect(headerCase).toEqual('JSON');
      });

      it('in dot.case', () => {
        const headerCase: string = toHeaderCase('json');

        expect(headerCase).toEqual('JSON');
      });

      it('in Header Case', () => {
        const headerCase: string = toHeaderCase('JSON');

        expect(headerCase).toEqual('JSON');
      });

      it('in param-case', () => {
        const headerCase: string = toHeaderCase('json');

        expect(headerCase).toEqual('JSON');
      });

      it('in PascalCase', () => {
        const headerCase: string = toHeaderCase('JSON');

        expect(headerCase).toEqual('JSON');
      });

      it('in snake_case', () => {
        const headerCase: string = toHeaderCase('json');

        expect(headerCase).toEqual('JSON');
      });

      it('in Title Case', () => {
        const headerCase: string = toHeaderCase('JSON');

        expect(headerCase).toEqual('JSON');
      });
    });
  });
});
