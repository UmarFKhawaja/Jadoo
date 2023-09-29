import { toConstantCase } from '.';

describe('toConstantCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const constantCase: string = toConstantCase('camelCase');

      expect(constantCase).toEqual('CAMEL_CASE');
    });

    it('in CONSTANT_CASE', () => {
      const constantCase: string = toConstantCase('CONSTANT_CASE');

      expect(constantCase).toEqual('CONSTANT_CASE');
    });

    it('in dot.case', () => {
      const constantCase: string = toConstantCase('dot.case');

      expect(constantCase).toEqual('DOT_CASE');
    });

    it('in Header Case', () => {
      const constantCase: string = toConstantCase('Header Case');

      expect(constantCase).toEqual('HEADER_CASE');
    });

    it('in param-case', () => {
      const constantCase: string = toConstantCase('param-case');

      expect(constantCase).toEqual('PARAM_CASE');
    });

    it('in PascalCase', () => {
      const constantCase: string = toConstantCase('PascalCase');

      expect(constantCase).toEqual('PASCAL_CASE');
    });

    it('in snake_case', () => {
      const constantCase: string = toConstantCase('snake_case');

      expect(constantCase).toEqual('SNAKE_CASE');
    });

    it('in Title Case', () => {
      const constantCase: string = toConstantCase('Title Case');

      expect(constantCase).toEqual('TITLE_CASE');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('idCamelCase');

        expect(constantCase).toEqual('ID_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('ID_CONSTANT_CASE');

        expect(constantCase).toEqual('ID_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('id.dot.case');

        expect(constantCase).toEqual('ID_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('ID Header Case');

        expect(constantCase).toEqual('ID_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('id-param-case');

        expect(constantCase).toEqual('ID_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('IDPascalCase');

        expect(constantCase).toEqual('ID_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('id_snake_case');

        expect(constantCase).toEqual('ID_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('ID Title Case');

        expect(constantCase).toEqual('ID_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseID');

        expect(constantCase).toEqual('CAMEL_CASE_ID');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_ID');

        expect(constantCase).toEqual('CONSTANT_CASE_ID');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.id');

        expect(constantCase).toEqual('DOT_CASE_ID');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case ID');

        expect(constantCase).toEqual('HEADER_CASE_ID');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-id');

        expect(constantCase).toEqual('PARAM_CASE_ID');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseID');

        expect(constantCase).toEqual('PASCAL_CASE_ID');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_id');

        expect(constantCase).toEqual('SNAKE_CASE_ID');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case ID');

        expect(constantCase).toEqual('TITLE_CASE_ID');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelIDCase');

        expect(constantCase).toEqual('CAMEL_ID_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_ID_CASE');

        expect(constantCase).toEqual('CONSTANT_ID_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.id.case');

        expect(constantCase).toEqual('DOT_ID_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header ID Case');

        expect(constantCase).toEqual('HEADER_ID_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-id-case');

        expect(constantCase).toEqual('PARAM_ID_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalIDCase');

        expect(constantCase).toEqual('PASCAL_ID_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_id_case');

        expect(constantCase).toEqual('SNAKE_ID_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title ID Case');

        expect(constantCase).toEqual('TITLE_ID_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('id');

        expect(constantCase).toEqual('ID');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('ID');

        expect(constantCase).toEqual('ID');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('id');

        expect(constantCase).toEqual('ID');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('ID');

        expect(constantCase).toEqual('ID');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('id');

        expect(constantCase).toEqual('ID');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('ID');

        expect(constantCase).toEqual('ID');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('id');

        expect(constantCase).toEqual('ID');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('ID');

        expect(constantCase).toEqual('ID');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('idsCamelCase');

        expect(constantCase).toEqual('IDS_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('IDS_CONSTANT_CASE');

        expect(constantCase).toEqual('IDS_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('ids.dot.case');

        expect(constantCase).toEqual('IDS_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('IDs Header Case');

        expect(constantCase).toEqual('IDS_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('ids-param-case');

        expect(constantCase).toEqual('IDS_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('IDsPascalCase');

        expect(constantCase).toEqual('IDS_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('ids_snake_case');

        expect(constantCase).toEqual('IDS_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('IDs Title Case');

        expect(constantCase).toEqual('IDS_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseIDs');

        expect(constantCase).toEqual('CAMEL_CASE_IDS');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_IDS');

        expect(constantCase).toEqual('CONSTANT_CASE_IDS');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.ids');

        expect(constantCase).toEqual('DOT_CASE_IDS');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case IDs');

        expect(constantCase).toEqual('HEADER_CASE_IDS');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-ids');

        expect(constantCase).toEqual('PARAM_CASE_IDS');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseIDs');

        expect(constantCase).toEqual('PASCAL_CASE_IDS');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_ids');

        expect(constantCase).toEqual('SNAKE_CASE_IDS');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case IDs');

        expect(constantCase).toEqual('TITLE_CASE_IDS');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelIDsCase');

        expect(constantCase).toEqual('CAMEL_IDS_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_IDS_CASE');

        expect(constantCase).toEqual('CONSTANT_IDS_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.ids.case');

        expect(constantCase).toEqual('DOT_IDS_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header IDs Case');

        expect(constantCase).toEqual('HEADER_IDS_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-ids-case');

        expect(constantCase).toEqual('PARAM_IDS_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalIDsCase');

        expect(constantCase).toEqual('PASCAL_IDS_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_ids_case');

        expect(constantCase).toEqual('SNAKE_IDS_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title IDs Case');

        expect(constantCase).toEqual('TITLE_IDS_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('ids');

        expect(constantCase).toEqual('IDS');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('IDS');

        expect(constantCase).toEqual('IDS');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('ids');

        expect(constantCase).toEqual('IDS');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('IDs');

        expect(constantCase).toEqual('IDS');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('ids');

        expect(constantCase).toEqual('IDS');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('IDs');

        expect(constantCase).toEqual('IDS');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('ids');

        expect(constantCase).toEqual('IDS');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('IDs');

        expect(constantCase).toEqual('IDS');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('dbCamelCase');

        expect(constantCase).toEqual('DB_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('DB_CONSTANT_CASE');

        expect(constantCase).toEqual('DB_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('db.dot.case');

        expect(constantCase).toEqual('DB_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('DB Header Case');

        expect(constantCase).toEqual('DB_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('db-param-case');

        expect(constantCase).toEqual('DB_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('DBPascalCase');

        expect(constantCase).toEqual('DB_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('db_snake_case');

        expect(constantCase).toEqual('DB_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('DB Title Case');

        expect(constantCase).toEqual('DB_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseDB');

        expect(constantCase).toEqual('CAMEL_CASE_DB');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_DB');

        expect(constantCase).toEqual('CONSTANT_CASE_DB');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.db');

        expect(constantCase).toEqual('DOT_CASE_DB');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case DB');

        expect(constantCase).toEqual('HEADER_CASE_DB');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-db');

        expect(constantCase).toEqual('PARAM_CASE_DB');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseDB');

        expect(constantCase).toEqual('PASCAL_CASE_DB');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_db');

        expect(constantCase).toEqual('SNAKE_CASE_DB');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case DB');

        expect(constantCase).toEqual('TITLE_CASE_DB');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelDBCase');

        expect(constantCase).toEqual('CAMEL_DB_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_DB_CASE');

        expect(constantCase).toEqual('CONSTANT_DB_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.db.case');

        expect(constantCase).toEqual('DOT_DB_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header DB Case');

        expect(constantCase).toEqual('HEADER_DB_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-db-case');

        expect(constantCase).toEqual('PARAM_DB_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalDBCase');

        expect(constantCase).toEqual('PASCAL_DB_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_db_case');

        expect(constantCase).toEqual('SNAKE_DB_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title DB Case');

        expect(constantCase).toEqual('TITLE_DB_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('db');

        expect(constantCase).toEqual('DB');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('DB');

        expect(constantCase).toEqual('DB');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('db');

        expect(constantCase).toEqual('DB');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('DB');

        expect(constantCase).toEqual('DB');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('db');

        expect(constantCase).toEqual('DB');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('DB');

        expect(constantCase).toEqual('DB');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('db');

        expect(constantCase).toEqual('DB');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('DB');

        expect(constantCase).toEqual('DB');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('dbsCamelCase');

        expect(constantCase).toEqual('DBS_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('DBS_CONSTANT_CASE');

        expect(constantCase).toEqual('DBS_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dbs.dot.case');

        expect(constantCase).toEqual('DBS_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('DBs Header Case');

        expect(constantCase).toEqual('DBS_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('dbs-param-case');

        expect(constantCase).toEqual('DBS_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('DBsPascalCase');

        expect(constantCase).toEqual('DBS_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('dbs_snake_case');

        expect(constantCase).toEqual('DBS_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('DBs Title Case');

        expect(constantCase).toEqual('DBS_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseDBs');

        expect(constantCase).toEqual('CAMEL_CASE_DBS');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_DBS');

        expect(constantCase).toEqual('CONSTANT_CASE_DBS');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.dbs');

        expect(constantCase).toEqual('DOT_CASE_DBS');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case DBs');

        expect(constantCase).toEqual('HEADER_CASE_DBS');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-dbs');

        expect(constantCase).toEqual('PARAM_CASE_DBS');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseDBs');

        expect(constantCase).toEqual('PASCAL_CASE_DBS');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_dbs');

        expect(constantCase).toEqual('SNAKE_CASE_DBS');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case DBs');

        expect(constantCase).toEqual('TITLE_CASE_DBS');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelDBsCase');

        expect(constantCase).toEqual('CAMEL_DBS_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_DBS_CASE');

        expect(constantCase).toEqual('CONSTANT_DBS_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.dbs.case');

        expect(constantCase).toEqual('DOT_DBS_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header DBs Case');

        expect(constantCase).toEqual('HEADER_DBS_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-dbs-case');

        expect(constantCase).toEqual('PARAM_DBS_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalDBsCase');

        expect(constantCase).toEqual('PASCAL_DBS_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_dbs_case');

        expect(constantCase).toEqual('SNAKE_DBS_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title DBs Case');

        expect(constantCase).toEqual('TITLE_DBS_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('dbs');

        expect(constantCase).toEqual('DBS');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('DBS');

        expect(constantCase).toEqual('DBS');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dbs');

        expect(constantCase).toEqual('DBS');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('DBs');

        expect(constantCase).toEqual('DBS');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('dbs');

        expect(constantCase).toEqual('DBS');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('DBs');

        expect(constantCase).toEqual('DBS');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('dbs');

        expect(constantCase).toEqual('DBS');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('DBs');

        expect(constantCase).toEqual('DBS');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('graphqlCamelCase');

        expect(constantCase).toEqual('GRAPHQL_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('GRAPHQL_CONSTANT_CASE');

        expect(constantCase).toEqual('GRAPHQL_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('graphql.dot.case');

        expect(constantCase).toEqual('GRAPHQL_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('GraphQL Header Case');

        expect(constantCase).toEqual('GRAPHQL_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('graphql-param-case');

        expect(constantCase).toEqual('GRAPHQL_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('GraphQLPascalCase');

        expect(constantCase).toEqual('GRAPHQL_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('graphql_snake_case');

        expect(constantCase).toEqual('GRAPHQL_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('GraphQL Title Case');

        expect(constantCase).toEqual('GRAPHQL_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseGraphQL');

        expect(constantCase).toEqual('CAMEL_CASE_GRAPHQL');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_GRAPHQL');

        expect(constantCase).toEqual('CONSTANT_CASE_GRAPHQL');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.graphql');

        expect(constantCase).toEqual('DOT_CASE_GRAPHQL');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case GraphQL');

        expect(constantCase).toEqual('HEADER_CASE_GRAPHQL');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-graphql');

        expect(constantCase).toEqual('PARAM_CASE_GRAPHQL');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseGraphQL');

        expect(constantCase).toEqual('PASCAL_CASE_GRAPHQL');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_graphql');

        expect(constantCase).toEqual('SNAKE_CASE_GRAPHQL');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case GraphQL');

        expect(constantCase).toEqual('TITLE_CASE_GRAPHQL');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelGraphQLCase');

        expect(constantCase).toEqual('CAMEL_GRAPHQL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_GRAPHQL_CASE');

        expect(constantCase).toEqual('CONSTANT_GRAPHQL_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.graphql.case');

        expect(constantCase).toEqual('DOT_GRAPHQL_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header GraphQL Case');

        expect(constantCase).toEqual('HEADER_GRAPHQL_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-graphql-case');

        expect(constantCase).toEqual('PARAM_GRAPHQL_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalGraphQLCase');

        expect(constantCase).toEqual('PASCAL_GRAPHQL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_graphql_case');

        expect(constantCase).toEqual('SNAKE_GRAPHQL_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title GraphQL Case');

        expect(constantCase).toEqual('TITLE_GRAPHQL_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('graphql');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('GRAPHQL');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('graphql');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('GraphQL');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('graphql');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('GraphQL');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('graphql');

        expect(constantCase).toEqual('GRAPHQL');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('GraphQL');

        expect(constantCase).toEqual('GRAPHQL');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('typeormCamelCase');

        expect(constantCase).toEqual('TYPEORM_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('TYPEORM_CONSTANT_CASE');

        expect(constantCase).toEqual('TYPEORM_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('typeorm.dot.case');

        expect(constantCase).toEqual('TYPEORM_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('TypeORM Header Case');

        expect(constantCase).toEqual('TYPEORM_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('typeorm-param-case');

        expect(constantCase).toEqual('TYPEORM_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('TypeORMPascalCase');

        expect(constantCase).toEqual('TYPEORM_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('typeorm_snake_case');

        expect(constantCase).toEqual('TYPEORM_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('TypeORM Title Case');

        expect(constantCase).toEqual('TYPEORM_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseTypeORM');

        expect(constantCase).toEqual('CAMEL_CASE_TYPEORM');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_TYPEORM');

        expect(constantCase).toEqual('CONSTANT_CASE_TYPEORM');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.typeorm');

        expect(constantCase).toEqual('DOT_CASE_TYPEORM');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case TypeORM');

        expect(constantCase).toEqual('HEADER_CASE_TYPEORM');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-typeorm');

        expect(constantCase).toEqual('PARAM_CASE_TYPEORM');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseTypeORM');

        expect(constantCase).toEqual('PASCAL_CASE_TYPEORM');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_typeorm');

        expect(constantCase).toEqual('SNAKE_CASE_TYPEORM');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case TypeORM');

        expect(constantCase).toEqual('TITLE_CASE_TYPEORM');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelTypeORMCase');

        expect(constantCase).toEqual('CAMEL_TYPEORM_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_TYPEORM_CASE');

        expect(constantCase).toEqual('CONSTANT_TYPEORM_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.typeorm.case');

        expect(constantCase).toEqual('DOT_TYPEORM_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header TypeORM Case');

        expect(constantCase).toEqual('HEADER_TYPEORM_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-typeorm-case');

        expect(constantCase).toEqual('PARAM_TYPEORM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalTypeORMCase');

        expect(constantCase).toEqual('PASCAL_TYPEORM_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_typeorm_case');

        expect(constantCase).toEqual('SNAKE_TYPEORM_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title TypeORM Case');

        expect(constantCase).toEqual('TITLE_TYPEORM_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('typeorm');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('TYPEORM');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('typeorm');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('TypeORM');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('typeorm');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('TypeORM');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('typeorm');

        expect(constantCase).toEqual('TYPEORM');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('TypeORM');

        expect(constantCase).toEqual('TYPEORM');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('jsonCamelCase');

        expect(constantCase).toEqual('JSON_CAMEL_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('JSON_CONSTANT_CASE');

        expect(constantCase).toEqual('JSON_CONSTANT_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('json.dot.case');

        expect(constantCase).toEqual('JSON_DOT_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('JSON Header Case');

        expect(constantCase).toEqual('JSON_HEADER_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('json-param-case');

        expect(constantCase).toEqual('JSON_PARAM_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('JSONPascalCase');

        expect(constantCase).toEqual('JSON_PASCAL_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('json_snake_case');

        expect(constantCase).toEqual('JSON_SNAKE_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('JSON Title Case');

        expect(constantCase).toEqual('JSON_TITLE_CASE');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelCaseJSON');

        expect(constantCase).toEqual('CAMEL_CASE_JSON');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_CASE_JSON');

        expect(constantCase).toEqual('CONSTANT_CASE_JSON');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.case.json');

        expect(constantCase).toEqual('DOT_CASE_JSON');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header Case JSON');

        expect(constantCase).toEqual('HEADER_CASE_JSON');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-case-json');

        expect(constantCase).toEqual('PARAM_CASE_JSON');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalCaseJSON');

        expect(constantCase).toEqual('PASCAL_CASE_JSON');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_case_json');

        expect(constantCase).toEqual('SNAKE_CASE_JSON');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title Case JSON');

        expect(constantCase).toEqual('TITLE_CASE_JSON');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('camelJSONCase');

        expect(constantCase).toEqual('CAMEL_JSON_CASE');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('CONSTANT_JSON_CASE');

        expect(constantCase).toEqual('CONSTANT_JSON_CASE');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('dot.json.case');

        expect(constantCase).toEqual('DOT_JSON_CASE');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('Header JSON Case');

        expect(constantCase).toEqual('HEADER_JSON_CASE');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('param-json-case');

        expect(constantCase).toEqual('PARAM_JSON_CASE');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('PascalJSONCase');

        expect(constantCase).toEqual('PASCAL_JSON_CASE');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('snake_json_case');

        expect(constantCase).toEqual('SNAKE_JSON_CASE');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('Title JSON Case');

        expect(constantCase).toEqual('TITLE_JSON_CASE');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const constantCase: string = toConstantCase('json');

        expect(constantCase).toEqual('JSON');
      });

      it('in CONSTANT_CASE', () => {
        const constantCase: string = toConstantCase('JSON');

        expect(constantCase).toEqual('JSON');
      });

      it('in dot.case', () => {
        const constantCase: string = toConstantCase('json');

        expect(constantCase).toEqual('JSON');
      });

      it('in Header Case', () => {
        const constantCase: string = toConstantCase('JSON');

        expect(constantCase).toEqual('JSON');
      });

      it('in param-case', () => {
        const constantCase: string = toConstantCase('json');

        expect(constantCase).toEqual('JSON');
      });

      it('in PascalCase', () => {
        const constantCase: string = toConstantCase('JSON');

        expect(constantCase).toEqual('JSON');
      });

      it('in snake_case', () => {
        const constantCase: string = toConstantCase('json');

        expect(constantCase).toEqual('JSON');
      });

      it('in Title Case', () => {
        const constantCase: string = toConstantCase('JSON');

        expect(constantCase).toEqual('JSON');
      });
    });
  });
});
