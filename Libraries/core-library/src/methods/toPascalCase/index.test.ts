import { toPascalCase } from '.';

describe('toPascalCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const pascalCase: string = toPascalCase('camelCase');

      expect(pascalCase).toEqual('CamelCase');
    });

    it('in CONSTANT_CASE', () => {
      const pascalCase: string = toPascalCase('CONSTANT_CASE');

      expect(pascalCase).toEqual('ConstantCase');
    });

    it('in dot.case', () => {
      const pascalCase: string = toPascalCase('dot.case');

      expect(pascalCase).toEqual('DotCase');
    });

    it('in Header Case', () => {
      const pascalCase: string = toPascalCase('Header Case');

      expect(pascalCase).toEqual('HeaderCase');
    });

    it('in param-case', () => {
      const pascalCase: string = toPascalCase('param-case');

      expect(pascalCase).toEqual('ParamCase');
    });

    it('in PascalCase', () => {
      const pascalCase: string = toPascalCase('PascalCase');

      expect(pascalCase).toEqual('PascalCase');
    });

    it('in snake_case', () => {
      const pascalCase: string = toPascalCase('snake_case');

      expect(pascalCase).toEqual('SnakeCase');
    });

    it('in Title Case', () => {
      const pascalCase: string = toPascalCase('Title Case');

      expect(pascalCase).toEqual('TitleCase');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('idCamelCase');

        expect(pascalCase).toEqual('IDCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('ID_CONSTANT_CASE');

        expect(pascalCase).toEqual('IDConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('id.dot.case');

        expect(pascalCase).toEqual('IDDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('ID Header Case');

        expect(pascalCase).toEqual('IDHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('id-param-case');

        expect(pascalCase).toEqual('IDParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('IDPascalCase');

        expect(pascalCase).toEqual('IDPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('id_snake_case');

        expect(pascalCase).toEqual('IDSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('ID Title Case');

        expect(pascalCase).toEqual('IDTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseID');

        expect(pascalCase).toEqual('CamelCaseID');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_ID');

        expect(pascalCase).toEqual('ConstantCaseID');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.id');

        expect(pascalCase).toEqual('DotCaseID');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case ID');

        expect(pascalCase).toEqual('HeaderCaseID');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-id');

        expect(pascalCase).toEqual('ParamCaseID');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseID');

        expect(pascalCase).toEqual('PascalCaseID');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_id');

        expect(pascalCase).toEqual('SnakeCaseID');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case ID');

        expect(pascalCase).toEqual('TitleCaseID');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelIDCase');

        expect(pascalCase).toEqual('CamelIDCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_ID_CASE');

        expect(pascalCase).toEqual('ConstantIDCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.id.case');

        expect(pascalCase).toEqual('DotIDCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header ID Case');

        expect(pascalCase).toEqual('HeaderIDCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-id-case');

        expect(pascalCase).toEqual('ParamIDCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalIDCase');

        expect(pascalCase).toEqual('PascalIDCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_id_case');

        expect(pascalCase).toEqual('SnakeIDCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title ID Case');

        expect(pascalCase).toEqual('TitleIDCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('id');

        expect(pascalCase).toEqual('ID');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('ID');

        expect(pascalCase).toEqual('ID');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('id');

        expect(pascalCase).toEqual('ID');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('ID');

        expect(pascalCase).toEqual('ID');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('id');

        expect(pascalCase).toEqual('ID');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('ID');

        expect(pascalCase).toEqual('ID');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('id');

        expect(pascalCase).toEqual('ID');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('ID');

        expect(pascalCase).toEqual('ID');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('idsCamelCase');

        expect(pascalCase).toEqual('IDsCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('IDS_CONSTANT_CASE');

        expect(pascalCase).toEqual('IDsConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('ids.dot.case');

        expect(pascalCase).toEqual('IDsDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('IDs Header Case');

        expect(pascalCase).toEqual('IDsHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('ids-param-case');

        expect(pascalCase).toEqual('IDsParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('IDsPascalCase');

        expect(pascalCase).toEqual('IDsPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('ids_snake_case');

        expect(pascalCase).toEqual('IDsSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('IDs Title Case');

        expect(pascalCase).toEqual('IDsTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseIDs');

        expect(pascalCase).toEqual('CamelCaseIDs');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_IDS');

        expect(pascalCase).toEqual('ConstantCaseIDs');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.ids');

        expect(pascalCase).toEqual('DotCaseIDs');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case IDs');

        expect(pascalCase).toEqual('HeaderCaseIDs');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-ids');

        expect(pascalCase).toEqual('ParamCaseIDs');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseIDs');

        expect(pascalCase).toEqual('PascalCaseIDs');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_ids');

        expect(pascalCase).toEqual('SnakeCaseIDs');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case IDs');

        expect(pascalCase).toEqual('TitleCaseIDs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelIDsCase');

        expect(pascalCase).toEqual('CamelIDsCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_IDS_CASE');

        expect(pascalCase).toEqual('ConstantIDsCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.ids.case');

        expect(pascalCase).toEqual('DotIDsCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header IDs Case');

        expect(pascalCase).toEqual('HeaderIDsCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-ids-case');

        expect(pascalCase).toEqual('ParamIDsCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalIDsCase');

        expect(pascalCase).toEqual('PascalIDsCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_ids_case');

        expect(pascalCase).toEqual('SnakeIDsCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title IDs Case');

        expect(pascalCase).toEqual('TitleIDsCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('ids');

        expect(pascalCase).toEqual('IDs');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('IDS');

        expect(pascalCase).toEqual('IDs');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('ids');

        expect(pascalCase).toEqual('IDs');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('IDs');

        expect(pascalCase).toEqual('IDs');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('ids');

        expect(pascalCase).toEqual('IDs');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('IDs');

        expect(pascalCase).toEqual('IDs');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('ids');

        expect(pascalCase).toEqual('IDs');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('IDs');

        expect(pascalCase).toEqual('IDs');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('dbCamelCase');

        expect(pascalCase).toEqual('DBCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('DB_CONSTANT_CASE');

        expect(pascalCase).toEqual('DBConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('db.dot.case');

        expect(pascalCase).toEqual('DBDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('DB Header Case');

        expect(pascalCase).toEqual('DBHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('db-param-case');

        expect(pascalCase).toEqual('DBParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('DBPascalCase');

        expect(pascalCase).toEqual('DBPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('db_snake_case');

        expect(pascalCase).toEqual('DBSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('DB Title Case');

        expect(pascalCase).toEqual('DBTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseDB');

        expect(pascalCase).toEqual('CamelCaseDB');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_DB');

        expect(pascalCase).toEqual('ConstantCaseDB');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.db');

        expect(pascalCase).toEqual('DotCaseDB');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case DB');

        expect(pascalCase).toEqual('HeaderCaseDB');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-db');

        expect(pascalCase).toEqual('ParamCaseDB');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseDB');

        expect(pascalCase).toEqual('PascalCaseDB');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_db');

        expect(pascalCase).toEqual('SnakeCaseDB');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case DB');

        expect(pascalCase).toEqual('TitleCaseDB');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelDBCase');

        expect(pascalCase).toEqual('CamelDBCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_DB_CASE');

        expect(pascalCase).toEqual('ConstantDBCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.db.case');

        expect(pascalCase).toEqual('DotDBCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header DB Case');

        expect(pascalCase).toEqual('HeaderDBCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-db-case');

        expect(pascalCase).toEqual('ParamDBCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalDBCase');

        expect(pascalCase).toEqual('PascalDBCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_db_case');

        expect(pascalCase).toEqual('SnakeDBCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title DB Case');

        expect(pascalCase).toEqual('TitleDBCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('db');

        expect(pascalCase).toEqual('DB');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('DB');

        expect(pascalCase).toEqual('DB');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('db');

        expect(pascalCase).toEqual('DB');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('DB');

        expect(pascalCase).toEqual('DB');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('db');

        expect(pascalCase).toEqual('DB');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('DB');

        expect(pascalCase).toEqual('DB');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('db');

        expect(pascalCase).toEqual('DB');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('DB');

        expect(pascalCase).toEqual('DB');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('dbsCamelCase');

        expect(pascalCase).toEqual('DBsCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('DBS_CONSTANT_CASE');

        expect(pascalCase).toEqual('DBsConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dbs.dot.case');

        expect(pascalCase).toEqual('DBsDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('DBs Header Case');

        expect(pascalCase).toEqual('DBsHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('dbs-param-case');

        expect(pascalCase).toEqual('DBsParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('DBsPascalCase');

        expect(pascalCase).toEqual('DBsPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('dbs_snake_case');

        expect(pascalCase).toEqual('DBsSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('DBs Title Case');

        expect(pascalCase).toEqual('DBsTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseDBs');

        expect(pascalCase).toEqual('CamelCaseDBs');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_DBS');

        expect(pascalCase).toEqual('ConstantCaseDBs');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.dbs');

        expect(pascalCase).toEqual('DotCaseDBs');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case DBs');

        expect(pascalCase).toEqual('HeaderCaseDBs');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-dbs');

        expect(pascalCase).toEqual('ParamCaseDBs');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseDBs');

        expect(pascalCase).toEqual('PascalCaseDBs');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_dbs');

        expect(pascalCase).toEqual('SnakeCaseDBs');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case DBs');

        expect(pascalCase).toEqual('TitleCaseDBs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelDBsCase');

        expect(pascalCase).toEqual('CamelDBsCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_DBS_CASE');

        expect(pascalCase).toEqual('ConstantDBsCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.dbs.case');

        expect(pascalCase).toEqual('DotDBsCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header DBs Case');

        expect(pascalCase).toEqual('HeaderDBsCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-dbs-case');

        expect(pascalCase).toEqual('ParamDBsCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalDBsCase');

        expect(pascalCase).toEqual('PascalDBsCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_dbs_case');

        expect(pascalCase).toEqual('SnakeDBsCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title DBs Case');

        expect(pascalCase).toEqual('TitleDBsCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('dbs');

        expect(pascalCase).toEqual('DBs');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('DBS');

        expect(pascalCase).toEqual('DBs');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dbs');

        expect(pascalCase).toEqual('DBs');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('DBs');

        expect(pascalCase).toEqual('DBs');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('dbs');

        expect(pascalCase).toEqual('DBs');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('DBs');

        expect(pascalCase).toEqual('DBs');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('dbs');

        expect(pascalCase).toEqual('DBs');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('DBs');

        expect(pascalCase).toEqual('DBs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('graphqlCamelCase');

        expect(pascalCase).toEqual('GraphQLCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('GRAPHQL_CONSTANT_CASE');

        expect(pascalCase).toEqual('GraphQLConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('graphql.dot.case');

        expect(pascalCase).toEqual('GraphQLDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('GraphQL Header Case');

        expect(pascalCase).toEqual('GraphQLHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('graphql-param-case');

        expect(pascalCase).toEqual('GraphQLParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('GraphQLPascalCase');

        expect(pascalCase).toEqual('GraphQLPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('graphql_snake_case');

        expect(pascalCase).toEqual('GraphQLSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('GraphQL Title Case');

        expect(pascalCase).toEqual('GraphQLTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseGraphQL');

        expect(pascalCase).toEqual('CamelCaseGraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_GRAPHQL');

        expect(pascalCase).toEqual('ConstantCaseGraphQL');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.graphql');

        expect(pascalCase).toEqual('DotCaseGraphQL');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case GraphQL');

        expect(pascalCase).toEqual('HeaderCaseGraphQL');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-graphql');

        expect(pascalCase).toEqual('ParamCaseGraphQL');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseGraphQL');

        expect(pascalCase).toEqual('PascalCaseGraphQL');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_graphql');

        expect(pascalCase).toEqual('SnakeCaseGraphQL');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case GraphQL');

        expect(pascalCase).toEqual('TitleCaseGraphQL');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelGraphQLCase');

        expect(pascalCase).toEqual('CamelGraphQLCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_GRAPHQL_CASE');

        expect(pascalCase).toEqual('ConstantGraphQLCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.graphql.case');

        expect(pascalCase).toEqual('DotGraphQLCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header GraphQL Case');

        expect(pascalCase).toEqual('HeaderGraphQLCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-graphql-case');

        expect(pascalCase).toEqual('ParamGraphQLCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalGraphQLCase');

        expect(pascalCase).toEqual('PascalGraphQLCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_graphql_case');

        expect(pascalCase).toEqual('SnakeGraphQLCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title GraphQL Case');

        expect(pascalCase).toEqual('TitleGraphQLCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('graphql');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('GRAPHQL');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('graphql');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('GraphQL');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('graphql');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('GraphQL');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('graphql');

        expect(pascalCase).toEqual('GraphQL');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('GraphQL');

        expect(pascalCase).toEqual('GraphQL');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('typeormCamelCase');

        expect(pascalCase).toEqual('TypeORMCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('TYPEORM_CONSTANT_CASE');

        expect(pascalCase).toEqual('TypeORMConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('typeorm.dot.case');

        expect(pascalCase).toEqual('TypeORMDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('TypeORM Header Case');

        expect(pascalCase).toEqual('TypeORMHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('typeorm-param-case');

        expect(pascalCase).toEqual('TypeORMParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('TypeORMPascalCase');

        expect(pascalCase).toEqual('TypeORMPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('typeorm_snake_case');

        expect(pascalCase).toEqual('TypeORMSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('TypeORM Title Case');

        expect(pascalCase).toEqual('TypeORMTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseTypeORM');

        expect(pascalCase).toEqual('CamelCaseTypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_TYPEORM');

        expect(pascalCase).toEqual('ConstantCaseTypeORM');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.typeorm');

        expect(pascalCase).toEqual('DotCaseTypeORM');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case TypeORM');

        expect(pascalCase).toEqual('HeaderCaseTypeORM');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-typeorm');

        expect(pascalCase).toEqual('ParamCaseTypeORM');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseTypeORM');

        expect(pascalCase).toEqual('PascalCaseTypeORM');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_typeorm');

        expect(pascalCase).toEqual('SnakeCaseTypeORM');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case TypeORM');

        expect(pascalCase).toEqual('TitleCaseTypeORM');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelTypeORMCase');

        expect(pascalCase).toEqual('CamelTypeORMCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_TYPEORM_CASE');

        expect(pascalCase).toEqual('ConstantTypeORMCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.typeorm.case');

        expect(pascalCase).toEqual('DotTypeORMCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header TypeORM Case');

        expect(pascalCase).toEqual('HeaderTypeORMCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-typeorm-case');

        expect(pascalCase).toEqual('ParamTypeORMCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalTypeORMCase');

        expect(pascalCase).toEqual('PascalTypeORMCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_typeorm_case');

        expect(pascalCase).toEqual('SnakeTypeORMCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title TypeORM Case');

        expect(pascalCase).toEqual('TitleTypeORMCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('typeorm');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('TYPEORM');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('typeorm');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('TypeORM');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('typeorm');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('TypeORM');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('typeorm');

        expect(pascalCase).toEqual('TypeORM');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('TypeORM');

        expect(pascalCase).toEqual('TypeORM');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('jsonCamelCase');

        expect(pascalCase).toEqual('JSONCamelCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('JSON_CONSTANT_CASE');

        expect(pascalCase).toEqual('JSONConstantCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('json.dot.case');

        expect(pascalCase).toEqual('JSONDotCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('JSON Header Case');

        expect(pascalCase).toEqual('JSONHeaderCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('json-param-case');

        expect(pascalCase).toEqual('JSONParamCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('JSONPascalCase');

        expect(pascalCase).toEqual('JSONPascalCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('json_snake_case');

        expect(pascalCase).toEqual('JSONSnakeCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('JSON Title Case');

        expect(pascalCase).toEqual('JSONTitleCase');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelCaseJSON');

        expect(pascalCase).toEqual('CamelCaseJSON');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_CASE_JSON');

        expect(pascalCase).toEqual('ConstantCaseJSON');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.case.json');

        expect(pascalCase).toEqual('DotCaseJSON');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header Case JSON');

        expect(pascalCase).toEqual('HeaderCaseJSON');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-case-json');

        expect(pascalCase).toEqual('ParamCaseJSON');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalCaseJSON');

        expect(pascalCase).toEqual('PascalCaseJSON');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_case_json');

        expect(pascalCase).toEqual('SnakeCaseJSON');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title Case JSON');

        expect(pascalCase).toEqual('TitleCaseJSON');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('camelJSONCase');

        expect(pascalCase).toEqual('CamelJSONCase');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('CONSTANT_JSON_CASE');

        expect(pascalCase).toEqual('ConstantJSONCase');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('dot.json.case');

        expect(pascalCase).toEqual('DotJSONCase');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('Header JSON Case');

        expect(pascalCase).toEqual('HeaderJSONCase');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('param-json-case');

        expect(pascalCase).toEqual('ParamJSONCase');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('PascalJSONCase');

        expect(pascalCase).toEqual('PascalJSONCase');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('snake_json_case');

        expect(pascalCase).toEqual('SnakeJSONCase');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('Title JSON Case');

        expect(pascalCase).toEqual('TitleJSONCase');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const pascalCase: string = toPascalCase('json');

        expect(pascalCase).toEqual('JSON');
      });

      it('in CONSTANT_CASE', () => {
        const pascalCase: string = toPascalCase('JSON');

        expect(pascalCase).toEqual('JSON');
      });

      it('in dot.case', () => {
        const pascalCase: string = toPascalCase('json');

        expect(pascalCase).toEqual('JSON');
      });

      it('in Header Case', () => {
        const pascalCase: string = toPascalCase('JSON');

        expect(pascalCase).toEqual('JSON');
      });

      it('in param-case', () => {
        const pascalCase: string = toPascalCase('json');

        expect(pascalCase).toEqual('JSON');
      });

      it('in PascalCase', () => {
        const pascalCase: string = toPascalCase('JSON');

        expect(pascalCase).toEqual('JSON');
      });

      it('in snake_case', () => {
        const pascalCase: string = toPascalCase('json');

        expect(pascalCase).toEqual('JSON');
      });

      it('in Title Case', () => {
        const pascalCase: string = toPascalCase('JSON');

        expect(pascalCase).toEqual('JSON');
      });
    });
  });
});
