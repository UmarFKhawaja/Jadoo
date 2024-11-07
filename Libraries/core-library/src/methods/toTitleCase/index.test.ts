import { toTitleCase } from '.';

describe('toTitleCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const titleCase: string = toTitleCase('camelCase');

      expect(titleCase).toEqual('Camel Case');
    });

    it('in CONSTANT_CASE', () => {
      const titleCase: string = toTitleCase('CONSTANT_CASE');

      expect(titleCase).toEqual('Constant Case');
    });

    it('in dot.case', () => {
      const titleCase: string = toTitleCase('dot.case');

      expect(titleCase).toEqual('Dot Case');
    });

    it('in Header Case', () => {
      const titleCase: string = toTitleCase('Header Case');

      expect(titleCase).toEqual('Header Case');
    });

    it('in param-case', () => {
      const titleCase: string = toTitleCase('param-case');

      expect(titleCase).toEqual('Param Case');
    });

    it('in PascalCase', () => {
      const titleCase: string = toTitleCase('PascalCase');

      expect(titleCase).toEqual('Pascal Case');
    });

    it('in snake_case', () => {
      const titleCase: string = toTitleCase('snake_case');

      expect(titleCase).toEqual('Snake Case');
    });

    it('in Title Case', () => {
      const titleCase: string = toTitleCase('Title Case');

      expect(titleCase).toEqual('Title Case');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('idCamelCase');

        expect(titleCase).toEqual('ID Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('ID_CONSTANT_CASE');

        expect(titleCase).toEqual('ID Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('id.dot.case');

        expect(titleCase).toEqual('ID Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('ID Header Case');

        expect(titleCase).toEqual('ID Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('id-param-case');

        expect(titleCase).toEqual('ID Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('IDPascalCase');

        expect(titleCase).toEqual('ID Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('id_snake_case');

        expect(titleCase).toEqual('ID Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('ID Title Case');

        expect(titleCase).toEqual('ID Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseID');

        expect(titleCase).toEqual('Camel Case ID');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_ID');

        expect(titleCase).toEqual('Constant Case ID');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.id');

        expect(titleCase).toEqual('Dot Case ID');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case ID');

        expect(titleCase).toEqual('Header Case ID');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-id');

        expect(titleCase).toEqual('Param Case ID');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('Pascal Case ID');

        expect(titleCase).toEqual('Pascal Case ID');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_id');

        expect(titleCase).toEqual('Snake Case ID');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case ID');

        expect(titleCase).toEqual('Title Case ID');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelIDCase');

        expect(titleCase).toEqual('Camel ID Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_ID_CASE');

        expect(titleCase).toEqual('Constant ID Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.id.case');

        expect(titleCase).toEqual('Dot ID Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header ID Case');

        expect(titleCase).toEqual('Header ID Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-id-case');

        expect(titleCase).toEqual('Param ID Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalIDCase');

        expect(titleCase).toEqual('Pascal ID Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_id_case');

        expect(titleCase).toEqual('Snake ID Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title ID Case');

        expect(titleCase).toEqual('Title ID Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('id');

        expect(titleCase).toEqual('ID');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('ID');

        expect(titleCase).toEqual('ID');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('id');

        expect(titleCase).toEqual('ID');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('ID');

        expect(titleCase).toEqual('ID');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('id');

        expect(titleCase).toEqual('ID');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('ID');

        expect(titleCase).toEqual('ID');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('id');

        expect(titleCase).toEqual('ID');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('ID');

        expect(titleCase).toEqual('ID');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('idsCamelCase');

        expect(titleCase).toEqual('IDs Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('IDS_CONSTANT_CASE');

        expect(titleCase).toEqual('IDs Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('ids.dot.case');

        expect(titleCase).toEqual('IDs Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('IDs Header Case');

        expect(titleCase).toEqual('IDs Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('ids-param-case');

        expect(titleCase).toEqual('IDs Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('IDsPascalCase');

        expect(titleCase).toEqual('IDs Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('ids_snake_case');

        expect(titleCase).toEqual('IDs Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('IDs Title Case');

        expect(titleCase).toEqual('IDs Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseIDs');

        expect(titleCase).toEqual('Camel Case IDs');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_IDS');

        expect(titleCase).toEqual('Constant Case IDs');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.ids');

        expect(titleCase).toEqual('Dot Case IDs');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case IDs');

        expect(titleCase).toEqual('Header Case IDs');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-ids');

        expect(titleCase).toEqual('Param Case IDs');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('Pascal Case IDs');

        expect(titleCase).toEqual('Pascal Case IDs');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_ids');

        expect(titleCase).toEqual('Snake Case IDs');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case IDs');

        expect(titleCase).toEqual('Title Case IDs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelIDsCase');

        expect(titleCase).toEqual('Camel IDs Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_IDS_CASE');

        expect(titleCase).toEqual('Constant IDs Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.ids.case');

        expect(titleCase).toEqual('Dot IDs Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header IDs Case');

        expect(titleCase).toEqual('Header IDs Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-ids-case');

        expect(titleCase).toEqual('Param IDs Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('Pascal IDs Case');

        expect(titleCase).toEqual('Pascal IDs Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_ids_case');

        expect(titleCase).toEqual('Snake IDs Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title IDs Case');

        expect(titleCase).toEqual('Title IDs Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('ids');

        expect(titleCase).toEqual('IDs');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('IDS');

        expect(titleCase).toEqual('IDs');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('ids');

        expect(titleCase).toEqual('IDs');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('IDs');

        expect(titleCase).toEqual('IDs');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('ids');

        expect(titleCase).toEqual('IDs');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('IDs');

        expect(titleCase).toEqual('IDs');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('ids');

        expect(titleCase).toEqual('IDs');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('IDs');

        expect(titleCase).toEqual('IDs');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('dbCamelCase');

        expect(titleCase).toEqual('DB Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('DB_CONSTANT_CASE');

        expect(titleCase).toEqual('DB Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('db.dot.case');

        expect(titleCase).toEqual('DB Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('DB Header Case');

        expect(titleCase).toEqual('DB Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('db-param-case');

        expect(titleCase).toEqual('DB Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('DBPascalCase');

        expect(titleCase).toEqual('DB Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('db_snake_case');

        expect(titleCase).toEqual('DB Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('DB Title Case');

        expect(titleCase).toEqual('DB Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseDB');

        expect(titleCase).toEqual('Camel Case DB');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_DB');

        expect(titleCase).toEqual('Constant Case DB');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.db');

        expect(titleCase).toEqual('Dot Case DB');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case DB');

        expect(titleCase).toEqual('Header Case DB');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-db');

        expect(titleCase).toEqual('Param Case DB');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalCaseDB');

        expect(titleCase).toEqual('Pascal Case DB');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_db');

        expect(titleCase).toEqual('Snake Case DB');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case DB');

        expect(titleCase).toEqual('Title Case DB');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelDBCase');

        expect(titleCase).toEqual('Camel DB Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_DB_CASE');

        expect(titleCase).toEqual('Constant DB Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.db.case');

        expect(titleCase).toEqual('Dot DB Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header DB Case');

        expect(titleCase).toEqual('Header DB Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-db-case');

        expect(titleCase).toEqual('Param DB Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalDBCase');

        expect(titleCase).toEqual('Pascal DB Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_db_case');

        expect(titleCase).toEqual('Snake DB Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title DB Case');

        expect(titleCase).toEqual('Title DB Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('db');

        expect(titleCase).toEqual('DB');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('DB');

        expect(titleCase).toEqual('DB');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('db');

        expect(titleCase).toEqual('DB');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('DB');

        expect(titleCase).toEqual('DB');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('db');

        expect(titleCase).toEqual('DB');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('DB');

        expect(titleCase).toEqual('DB');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('db');

        expect(titleCase).toEqual('DB');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('DB');

        expect(titleCase).toEqual('DB');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('dbsCamelCase');

        expect(titleCase).toEqual('DBs Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('DBS_CONSTANT_CASE');

        expect(titleCase).toEqual('DBs Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dbs.dot.case');

        expect(titleCase).toEqual('DBs Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('DBs Header Case');

        expect(titleCase).toEqual('DBs Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('dbs-param-case');

        expect(titleCase).toEqual('DBs Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('DBsPascalCase');

        expect(titleCase).toEqual('DBs Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('dbs_snake_case');

        expect(titleCase).toEqual('DBs Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('DBs Title Case');

        expect(titleCase).toEqual('DBs Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseDBs');

        expect(titleCase).toEqual('Camel Case DBs');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_DBS');

        expect(titleCase).toEqual('Constant Case DBs');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.dbs');

        expect(titleCase).toEqual('Dot Case DBs');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case DBs');

        expect(titleCase).toEqual('Header Case DBs');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-dbs');

        expect(titleCase).toEqual('Param Case DBs');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalCaseDBs');

        expect(titleCase).toEqual('Pascal Case DBs');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_dbs');

        expect(titleCase).toEqual('Snake Case DBs');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case DBs');

        expect(titleCase).toEqual('Title Case DBs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelDBsCase');

        expect(titleCase).toEqual('Camel DBs Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_DBS_CASE');

        expect(titleCase).toEqual('Constant DBs Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.dbs.case');

        expect(titleCase).toEqual('Dot DBs Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header DBs Case');

        expect(titleCase).toEqual('Header DBs Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-dbs-case');

        expect(titleCase).toEqual('Param DBs Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalDBsCase');

        expect(titleCase).toEqual('Pascal DBs Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_dbs_case');

        expect(titleCase).toEqual('Snake DBs Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title DBs Case');

        expect(titleCase).toEqual('Title DBs Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('dbs');

        expect(titleCase).toEqual('DBs');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('DBS');

        expect(titleCase).toEqual('DBs');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dbs');

        expect(titleCase).toEqual('DBs');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('DBs');

        expect(titleCase).toEqual('DBs');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('dbs');

        expect(titleCase).toEqual('DBs');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('DBs');

        expect(titleCase).toEqual('DBs');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('dbs');

        expect(titleCase).toEqual('DBs');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('DBs');

        expect(titleCase).toEqual('DBs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('graphqlCamelCase');

        expect(titleCase).toEqual('GraphQL Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('GRAPHQL_CONSTANT_CASE');

        expect(titleCase).toEqual('GraphQL Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('graphql.dot.case');

        expect(titleCase).toEqual('GraphQL Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('GraphQL Header Case');

        expect(titleCase).toEqual('GraphQL Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('graphql-param-case');

        expect(titleCase).toEqual('GraphQL Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('GraphQLPascalCase');

        expect(titleCase).toEqual('GraphQL Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('graphql_snake_case');

        expect(titleCase).toEqual('GraphQL Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('GraphQL Title Case');

        expect(titleCase).toEqual('GraphQL Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseGraphQL');

        expect(titleCase).toEqual('Camel Case GraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_GRAPHQL');

        expect(titleCase).toEqual('Constant Case GraphQL');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.graphql');

        expect(titleCase).toEqual('Dot Case GraphQL');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case GraphQL');

        expect(titleCase).toEqual('Header Case GraphQL');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-graphql');

        expect(titleCase).toEqual('Param Case GraphQL');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalCaseGraphQL');

        expect(titleCase).toEqual('Pascal Case GraphQL');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_graphql');

        expect(titleCase).toEqual('Snake Case GraphQL');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case GraphQL');

        expect(titleCase).toEqual('Title Case GraphQL');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelGraphQLCase');

        expect(titleCase).toEqual('Camel GraphQL Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_GRAPHQL_CASE');

        expect(titleCase).toEqual('Constant GraphQL Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.graphql.case');

        expect(titleCase).toEqual('Dot GraphQL Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header GraphQL Case');

        expect(titleCase).toEqual('Header GraphQL Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-graphql-case');

        expect(titleCase).toEqual('Param GraphQL Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalGraphQLCase');

        expect(titleCase).toEqual('Pascal GraphQL Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_graphql_case');

        expect(titleCase).toEqual('Snake GraphQL Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title GraphQL Case');

        expect(titleCase).toEqual('Title GraphQL Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('graphql');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('GRAPHQL');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('graphql');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('GraphQL');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('graphql');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('GraphQL');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('graphql');

        expect(titleCase).toEqual('GraphQL');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('GraphQL');

        expect(titleCase).toEqual('GraphQL');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('typeormCamelCase');

        expect(titleCase).toEqual('TypeORM Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('TYPEORM_CONSTANT_CASE');

        expect(titleCase).toEqual('TypeORM Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('typeorm.dot.case');

        expect(titleCase).toEqual('TypeORM Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('TypeORM Header Case');

        expect(titleCase).toEqual('TypeORM Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('typeorm-param-case');

        expect(titleCase).toEqual('TypeORM Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('TypeORMPascalCase');

        expect(titleCase).toEqual('TypeORM Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('typeorm_snake_case');

        expect(titleCase).toEqual('TypeORM Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('TypeORM Title Case');

        expect(titleCase).toEqual('TypeORM Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseTypeORM');

        expect(titleCase).toEqual('Camel Case TypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_TYPEORM');

        expect(titleCase).toEqual('Constant Case TypeORM');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.typeorm');

        expect(titleCase).toEqual('Dot Case TypeORM');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case TypeORM');

        expect(titleCase).toEqual('Header Case TypeORM');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-typeorm');

        expect(titleCase).toEqual('Param Case TypeORM');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalCaseTypeORM');

        expect(titleCase).toEqual('Pascal Case TypeORM');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_typeorm');

        expect(titleCase).toEqual('Snake Case TypeORM');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case TypeORM');

        expect(titleCase).toEqual('Title Case TypeORM');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelTypeORMCase');

        expect(titleCase).toEqual('Camel TypeORM Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_TYPEORM_CASE');

        expect(titleCase).toEqual('Constant TypeORM Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.typeorm.case');

        expect(titleCase).toEqual('Dot TypeORM Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header TypeORM Case');

        expect(titleCase).toEqual('Header TypeORM Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-typeorm-case');

        expect(titleCase).toEqual('Param TypeORM Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalTypeORMCase');

        expect(titleCase).toEqual('Pascal TypeORM Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_typeorm_case');

        expect(titleCase).toEqual('Snake TypeORM Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title TypeORM Case');

        expect(titleCase).toEqual('Title TypeORM Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('typeorm');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('TYPEORM');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('typeorm');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('TypeORM');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('typeorm');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('TypeORM');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('typeorm');

        expect(titleCase).toEqual('TypeORM');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('TypeORM');

        expect(titleCase).toEqual('TypeORM');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('jsonCamelCase');

        expect(titleCase).toEqual('JSON Camel Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('JSON_CONSTANT_CASE');

        expect(titleCase).toEqual('JSON Constant Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('json.dot.case');

        expect(titleCase).toEqual('JSON Dot Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('JSON Header Case');

        expect(titleCase).toEqual('JSON Header Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('json-param-case');

        expect(titleCase).toEqual('JSON Param Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('JSONPascalCase');

        expect(titleCase).toEqual('JSON Pascal Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('json_snake_case');

        expect(titleCase).toEqual('JSON Snake Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('JSON Title Case');

        expect(titleCase).toEqual('JSON Title Case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelCaseJSON');

        expect(titleCase).toEqual('Camel Case JSON');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_CASE_JSON');

        expect(titleCase).toEqual('Constant Case JSON');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.case.json');

        expect(titleCase).toEqual('Dot Case JSON');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header Case JSON');

        expect(titleCase).toEqual('Header Case JSON');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-case-json');

        expect(titleCase).toEqual('Param Case JSON');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalCaseJSON');

        expect(titleCase).toEqual('Pascal Case JSON');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_case_json');

        expect(titleCase).toEqual('Snake Case JSON');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title Case JSON');

        expect(titleCase).toEqual('Title Case JSON');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('camelJSONCase');

        expect(titleCase).toEqual('Camel JSON Case');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('CONSTANT_JSON_CASE');

        expect(titleCase).toEqual('Constant JSON Case');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('dot.json.case');

        expect(titleCase).toEqual('Dot JSON Case');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('Header JSON Case');

        expect(titleCase).toEqual('Header JSON Case');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('param-json-case');

        expect(titleCase).toEqual('Param JSON Case');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('PascalJSONCase');

        expect(titleCase).toEqual('Pascal JSON Case');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('snake_json_case');

        expect(titleCase).toEqual('Snake JSON Case');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('Title JSON Case');

        expect(titleCase).toEqual('Title JSON Case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const titleCase: string = toTitleCase('json');

        expect(titleCase).toEqual('JSON');
      });

      it('in CONSTANT_CASE', () => {
        const titleCase: string = toTitleCase('JSON');

        expect(titleCase).toEqual('JSON');
      });

      it('in dot.case', () => {
        const titleCase: string = toTitleCase('json');

        expect(titleCase).toEqual('JSON');
      });

      it('in Header Case', () => {
        const titleCase: string = toTitleCase('JSON');

        expect(titleCase).toEqual('JSON');
      });

      it('in param-case', () => {
        const titleCase: string = toTitleCase('json');

        expect(titleCase).toEqual('JSON');
      });

      it('in PascalCase', () => {
        const titleCase: string = toTitleCase('JSON');

        expect(titleCase).toEqual('JSON');
      });

      it('in snake_case', () => {
        const titleCase: string = toTitleCase('json');

        expect(titleCase).toEqual('JSON');
      });

      it('in Title Case', () => {
        const titleCase: string = toTitleCase('JSON');

        expect(titleCase).toEqual('JSON');
      });
    });
  });
});
