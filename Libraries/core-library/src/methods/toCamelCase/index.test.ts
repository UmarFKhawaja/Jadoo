import { toCamelCase } from '.';

describe('toCamelCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const camelCase: string = toCamelCase('camelCase');

      expect(camelCase).toEqual('camelCase');
    });

    it('in CONSTANT_CASE', () => {
      const camelCase: string = toCamelCase('CONSTANT_CASE');

      expect(camelCase).toEqual('constantCase');
    });

    it('in dot.case', () => {
      const camelCase: string = toCamelCase('dot.case');

      expect(camelCase).toEqual('dotCase');
    });

    it('in Header Case', () => {
      const camelCase: string = toCamelCase('Header Case');

      expect(camelCase).toEqual('headerCase');
    });

    it('in param-case', () => {
      const camelCase: string = toCamelCase('param-case');

      expect(camelCase).toEqual('paramCase');
    });

    it('in PascalCase', () => {
      const camelCase: string = toCamelCase('PascalCase');

      expect(camelCase).toEqual('pascalCase');
    });

    it('in snake_case', () => {
      const camelCase: string = toCamelCase('snake_case');

      expect(camelCase).toEqual('snakeCase');
    });

    it('in Title Case', () => {
      const camelCase: string = toCamelCase('Title Case');

      expect(camelCase).toEqual('titleCase');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('idCamelCase');

        expect(camelCase).toEqual('idCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('ID_CONSTANT_CASE');

        expect(camelCase).toEqual('idConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('id.dot.case');

        expect(camelCase).toEqual('idDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('ID Header Case');

        expect(camelCase).toEqual('idHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('id-param-case');

        expect(camelCase).toEqual('idParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('IDPascalCase');

        expect(camelCase).toEqual('idPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('id_snake_case');

        expect(camelCase).toEqual('idSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('ID Title Case');

        expect(camelCase).toEqual('idTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseID');

        expect(camelCase).toEqual('camelCaseID');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_ID');

        expect(camelCase).toEqual('constantCaseID');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.id');

        expect(camelCase).toEqual('dotCaseID');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case ID');

        expect(camelCase).toEqual('headerCaseID');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-id');

        expect(camelCase).toEqual('paramCaseID');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseID');

        expect(camelCase).toEqual('pascalCaseID');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_id');

        expect(camelCase).toEqual('snakeCaseID');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case ID');

        expect(camelCase).toEqual('titleCaseID');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelIDCase');

        expect(camelCase).toEqual('camelIDCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_ID_CASE');

        expect(camelCase).toEqual('constantIDCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.id.case');

        expect(camelCase).toEqual('dotIDCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header ID Case');

        expect(camelCase).toEqual('headerIDCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-id-case');

        expect(camelCase).toEqual('paramIDCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalIDCase');

        expect(camelCase).toEqual('pascalIDCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_id_case');

        expect(camelCase).toEqual('snakeIDCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title ID Case');

        expect(camelCase).toEqual('titleIDCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('id');

        expect(camelCase).toEqual('id');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('ID');

        expect(camelCase).toEqual('id');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('id');

        expect(camelCase).toEqual('id');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('ID');

        expect(camelCase).toEqual('id');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('id');

        expect(camelCase).toEqual('id');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('ID');

        expect(camelCase).toEqual('id');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('id');

        expect(camelCase).toEqual('id');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('ID');

        expect(camelCase).toEqual('id');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('idsCamelCase');

        expect(camelCase).toEqual('idsCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('IDS_CONSTANT_CASE');

        expect(camelCase).toEqual('idsConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('ids.dot.case');

        expect(camelCase).toEqual('idsDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('IDs Header Case');

        expect(camelCase).toEqual('idsHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('ids-param-case');

        expect(camelCase).toEqual('idsParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('IDsPascalCase');

        expect(camelCase).toEqual('idsPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('ids_snake_case');

        expect(camelCase).toEqual('idsSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('IDs Title Case');

        expect(camelCase).toEqual('idsTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseIDs');

        expect(camelCase).toEqual('camelCaseIDs');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_IDS');

        expect(camelCase).toEqual('constantCaseIDs');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.ids');

        expect(camelCase).toEqual('dotCaseIDs');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case IDs');

        expect(camelCase).toEqual('headerCaseIDs');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-ids');

        expect(camelCase).toEqual('paramCaseIDs');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseIDs');

        expect(camelCase).toEqual('pascalCaseIDs');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_ids');

        expect(camelCase).toEqual('snakeCaseIDs');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case IDs');

        expect(camelCase).toEqual('titleCaseIDs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelIDsCase');

        expect(camelCase).toEqual('camelIDsCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_IDS_CASE');

        expect(camelCase).toEqual('constantIDsCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.ids.case');

        expect(camelCase).toEqual('dotIDsCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header IDs Case');

        expect(camelCase).toEqual('headerIDsCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-ids-case');

        expect(camelCase).toEqual('paramIDsCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalIDsCase');

        expect(camelCase).toEqual('pascalIDsCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_ids_case');

        expect(camelCase).toEqual('snakeIDsCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title IDs Case');

        expect(camelCase).toEqual('titleIDsCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('ids');

        expect(camelCase).toEqual('ids');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('IDS');

        expect(camelCase).toEqual('ids');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('ids');

        expect(camelCase).toEqual('ids');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('IDs');

        expect(camelCase).toEqual('ids');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('ids');

        expect(camelCase).toEqual('ids');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('IDs');

        expect(camelCase).toEqual('ids');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('ids');

        expect(camelCase).toEqual('ids');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('IDs');

        expect(camelCase).toEqual('ids');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('dbCamelCase');

        expect(camelCase).toEqual('dbCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('DB_CONSTANT_CASE');

        expect(camelCase).toEqual('dbConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('db.dot.case');

        expect(camelCase).toEqual('dbDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('DB Header Case');

        expect(camelCase).toEqual('dbHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('db-param-case');

        expect(camelCase).toEqual('dbParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('DBPascalCase');

        expect(camelCase).toEqual('dbPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('db_snake_case');

        expect(camelCase).toEqual('dbSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('DB Title Case');

        expect(camelCase).toEqual('dbTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseDB');

        expect(camelCase).toEqual('camelCaseDB');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_DB');

        expect(camelCase).toEqual('constantCaseDB');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.db');

        expect(camelCase).toEqual('dotCaseDB');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case DB');

        expect(camelCase).toEqual('headerCaseDB');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-db');

        expect(camelCase).toEqual('paramCaseDB');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseDB');

        expect(camelCase).toEqual('pascalCaseDB');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_db');

        expect(camelCase).toEqual('snakeCaseDB');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case DB');

        expect(camelCase).toEqual('titleCaseDB');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelDBCase');

        expect(camelCase).toEqual('camelDBCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_DB_CASE');

        expect(camelCase).toEqual('constantDBCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.db.case');

        expect(camelCase).toEqual('dotDBCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header DB Case');

        expect(camelCase).toEqual('headerDBCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-db-case');

        expect(camelCase).toEqual('paramDBCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalDBCase');

        expect(camelCase).toEqual('pascalDBCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_db_case');

        expect(camelCase).toEqual('snakeDBCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title DB Case');

        expect(camelCase).toEqual('titleDBCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('db');

        expect(camelCase).toEqual('db');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('DB');

        expect(camelCase).toEqual('db');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('db');

        expect(camelCase).toEqual('db');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('DB');

        expect(camelCase).toEqual('db');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('db');

        expect(camelCase).toEqual('db');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('DB');

        expect(camelCase).toEqual('db');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('db');

        expect(camelCase).toEqual('db');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('DB');

        expect(camelCase).toEqual('db');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('dbsCamelCase');

        expect(camelCase).toEqual('dbsCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('DBS_CONSTANT_CASE');

        expect(camelCase).toEqual('dbsConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dbs.dot.case');

        expect(camelCase).toEqual('dbsDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('DBs Header Case');

        expect(camelCase).toEqual('dbsHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('dbs-param-case');

        expect(camelCase).toEqual('dbsParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('DBsPascalCase');

        expect(camelCase).toEqual('dbsPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('dbs_snake_case');

        expect(camelCase).toEqual('dbsSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('DBs Title Case');

        expect(camelCase).toEqual('dbsTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseDBs');

        expect(camelCase).toEqual('camelCaseDBs');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_DBS');

        expect(camelCase).toEqual('constantCaseDBs');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.dbs');

        expect(camelCase).toEqual('dotCaseDBs');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case DBs');

        expect(camelCase).toEqual('headerCaseDBs');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-dbs');

        expect(camelCase).toEqual('paramCaseDBs');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseDBs');

        expect(camelCase).toEqual('pascalCaseDBs');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_dbs');

        expect(camelCase).toEqual('snakeCaseDBs');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case DBs');

        expect(camelCase).toEqual('titleCaseDBs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelDBsCase');

        expect(camelCase).toEqual('camelDBsCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_DBS_CASE');

        expect(camelCase).toEqual('constantDBsCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.dbs.case');

        expect(camelCase).toEqual('dotDBsCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header DBs Case');

        expect(camelCase).toEqual('headerDBsCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-dbs-case');

        expect(camelCase).toEqual('paramDBsCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalDBsCase');

        expect(camelCase).toEqual('pascalDBsCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_dbs_case');

        expect(camelCase).toEqual('snakeDBsCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title DBs Case');

        expect(camelCase).toEqual('titleDBsCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('dbs');

        expect(camelCase).toEqual('dbs');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('DBS');

        expect(camelCase).toEqual('dbs');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dbs');

        expect(camelCase).toEqual('dbs');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('DBs');

        expect(camelCase).toEqual('dbs');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('dbs');

        expect(camelCase).toEqual('dbs');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('DBs');

        expect(camelCase).toEqual('dbs');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('dbs');

        expect(camelCase).toEqual('dbs');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('DBs');

        expect(camelCase).toEqual('dbs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('graphqlCamelCase');

        expect(camelCase).toEqual('graphQLCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('GRAPHQL_CONSTANT_CASE');

        expect(camelCase).toEqual('graphQLConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('graphql.dot.case');

        expect(camelCase).toEqual('graphQLDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('GraphQL Header Case');

        expect(camelCase).toEqual('graphQLHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('graphql-param-case');

        expect(camelCase).toEqual('graphQLParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('GraphQLPascalCase');

        expect(camelCase).toEqual('graphQLPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('graphql_snake_case');

        expect(camelCase).toEqual('graphQLSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('GraphQL Title Case');

        expect(camelCase).toEqual('graphQLTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseGraphQL');

        expect(camelCase).toEqual('camelCaseGraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_GRAPHQL');

        expect(camelCase).toEqual('constantCaseGraphQL');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.graphql');

        expect(camelCase).toEqual('dotCaseGraphQL');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case GraphQL');

        expect(camelCase).toEqual('headerCaseGraphQL');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-graphql');

        expect(camelCase).toEqual('paramCaseGraphQL');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseGraphQL');

        expect(camelCase).toEqual('pascalCaseGraphQL');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_graphql');

        expect(camelCase).toEqual('snakeCaseGraphQL');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case GraphQL');

        expect(camelCase).toEqual('titleCaseGraphQL');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelGraphQLCase');

        expect(camelCase).toEqual('camelGraphQLCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_GRAPHQL_CASE');

        expect(camelCase).toEqual('constantGraphQLCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.graphql.case');

        expect(camelCase).toEqual('dotGraphQLCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header GraphQL Case');

        expect(camelCase).toEqual('headerGraphQLCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-graphql-case');

        expect(camelCase).toEqual('paramGraphQLCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalGraphQLCase');

        expect(camelCase).toEqual('pascalGraphQLCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_graphql_case');

        expect(camelCase).toEqual('snakeGraphQLCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title GraphQL Case');

        expect(camelCase).toEqual('titleGraphQLCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('graphql');

        expect(camelCase).toEqual('graphQL');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('GRAPHQL');

        expect(camelCase).toEqual('graphQL');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('graphql');

        expect(camelCase).toEqual('graphQL');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('GraphQL');

        expect(camelCase).toEqual('graphQL');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('graphql');

        expect(camelCase).toEqual('graphQL');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('GraphQL');

        expect(camelCase).toEqual('graphQL');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('graphql');

        expect(camelCase).toEqual('graphQL');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('GraphQL');

        expect(camelCase).toEqual('graphQL');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('typeormCamelCase');

        expect(camelCase).toEqual('typeORMCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('TYPEORM_CONSTANT_CASE');

        expect(camelCase).toEqual('typeORMConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('typeorm.dot.case');

        expect(camelCase).toEqual('typeORMDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('TypeORM Header Case');

        expect(camelCase).toEqual('typeORMHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('typeorm-param-case');

        expect(camelCase).toEqual('typeORMParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('TypeORMPascalCase');

        expect(camelCase).toEqual('typeORMPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('typeorm_snake_case');

        expect(camelCase).toEqual('typeORMSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('TypeORM Title Case');

        expect(camelCase).toEqual('typeORMTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseTypeORM');

        expect(camelCase).toEqual('camelCaseTypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_TYPEORM');

        expect(camelCase).toEqual('constantCaseTypeORM');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.typeorm');

        expect(camelCase).toEqual('dotCaseTypeORM');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case TypeORM');

        expect(camelCase).toEqual('headerCaseTypeORM');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-typeorm');

        expect(camelCase).toEqual('paramCaseTypeORM');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseTypeORM');

        expect(camelCase).toEqual('pascalCaseTypeORM');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_typeorm');

        expect(camelCase).toEqual('snakeCaseTypeORM');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case TypeORM');

        expect(camelCase).toEqual('titleCaseTypeORM');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelTypeORMCase');

        expect(camelCase).toEqual('camelTypeORMCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_TYPEORM_CASE');

        expect(camelCase).toEqual('constantTypeORMCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.typeorm.case');

        expect(camelCase).toEqual('dotTypeORMCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header TypeORM Case');

        expect(camelCase).toEqual('headerTypeORMCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-typeorm-case');

        expect(camelCase).toEqual('paramTypeORMCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalTypeORMCase');

        expect(camelCase).toEqual('pascalTypeORMCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_typeorm_case');

        expect(camelCase).toEqual('snakeTypeORMCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title TypeORM Case');

        expect(camelCase).toEqual('titleTypeORMCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('typeorm');

        expect(camelCase).toEqual('typeORM');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('TYPEORM');

        expect(camelCase).toEqual('typeORM');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('typeorm');

        expect(camelCase).toEqual('typeORM');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('TypeORM');

        expect(camelCase).toEqual('typeORM');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('typeorm');

        expect(camelCase).toEqual('typeORM');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('TypeORM');

        expect(camelCase).toEqual('typeORM');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('typeorm');

        expect(camelCase).toEqual('typeORM');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('TypeORM');

        expect(camelCase).toEqual('typeORM');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('jsonCamelCase');

        expect(camelCase).toEqual('jsonCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('JSON_CONSTANT_CASE');

        expect(camelCase).toEqual('jsonConstantCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('json.dot.case');

        expect(camelCase).toEqual('jsonDotCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('JSON Header Case');

        expect(camelCase).toEqual('jsonHeaderCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('json-param-case');

        expect(camelCase).toEqual('jsonParamCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('JSONPascalCase');

        expect(camelCase).toEqual('jsonPascalCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('json_snake_case');

        expect(camelCase).toEqual('jsonSnakeCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('JSON Title Case');

        expect(camelCase).toEqual('jsonTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelCaseJSON');

        expect(camelCase).toEqual('camelCaseJSON');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_CASE_JSON');

        expect(camelCase).toEqual('constantCaseJSON');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.case.json');

        expect(camelCase).toEqual('dotCaseJSON');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header Case JSON');

        expect(camelCase).toEqual('headerCaseJSON');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-case-json');

        expect(camelCase).toEqual('paramCaseJSON');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalCaseJSON');

        expect(camelCase).toEqual('pascalCaseJSON');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_case_json');

        expect(camelCase).toEqual('snakeCaseJSON');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title Case JSON');

        expect(camelCase).toEqual('titleCaseJSON');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('camelJSONCase');

        expect(camelCase).toEqual('camelJSONCase');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('CONSTANT_JSON_CASE');

        expect(camelCase).toEqual('constantJSONCase');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('dot.json.case');

        expect(camelCase).toEqual('dotJSONCase');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('Header JSON Case');

        expect(camelCase).toEqual('headerJSONCase');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('param-json-case');

        expect(camelCase).toEqual('paramJSONCase');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('PascalJSONCase');

        expect(camelCase).toEqual('pascalJSONCase');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('snake_json_case');

        expect(camelCase).toEqual('snakeJSONCase');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('Title JSON Case');

        expect(camelCase).toEqual('titleJSONCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const camelCase: string = toCamelCase('json');

        expect(camelCase).toEqual('json');
      });

      it('in CONSTANT_CASE', () => {
        const camelCase: string = toCamelCase('JSON');

        expect(camelCase).toEqual('json');
      });

      it('in dot.case', () => {
        const camelCase: string = toCamelCase('json');

        expect(camelCase).toEqual('json');
      });

      it('in Header Case', () => {
        const camelCase: string = toCamelCase('JSON');

        expect(camelCase).toEqual('json');
      });

      it('in param-case', () => {
        const camelCase: string = toCamelCase('json');

        expect(camelCase).toEqual('json');
      });

      it('in PascalCase', () => {
        const camelCase: string = toCamelCase('JSON');

        expect(camelCase).toEqual('json');
      });

      it('in snake_case', () => {
        const camelCase: string = toCamelCase('json');

        expect(camelCase).toEqual('json');
      });

      it('in Title Case', () => {
        const camelCase: string = toCamelCase('JSON');

        expect(camelCase).toEqual('json');
      });
    });
  });
});
