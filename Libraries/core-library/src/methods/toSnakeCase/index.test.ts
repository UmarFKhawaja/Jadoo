import { toSnakeCase } from '.';

describe('toSnakeCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const snakeCase: string = toSnakeCase('camelCase');

      expect(snakeCase).toEqual('camel_case');
    });

    it('in CONSTANT_CASE', () => {
      const snakeCase: string = toSnakeCase('CONSTANT_CASE');

      expect(snakeCase).toEqual('constant_case');
    });

    it('in dot.case', () => {
      const snakeCase: string = toSnakeCase('dot.case');

      expect(snakeCase).toEqual('dot_case');
    });

    it('in Header Case', () => {
      const snakeCase: string = toSnakeCase('Header Case');

      expect(snakeCase).toEqual('header_case');
    });

    it('in param-case', () => {
      const snakeCase: string = toSnakeCase('param-case');

      expect(snakeCase).toEqual('param_case');
    });

    it('in PascalCase', () => {
      const snakeCase: string = toSnakeCase('PascalCase');

      expect(snakeCase).toEqual('pascal_case');
    });

    it('in snake_case', () => {
      const snakeCase: string = toSnakeCase('snake_case');

      expect(snakeCase).toEqual('snake_case');
    });

    it('in Title Case', () => {
      const snakeCase: string = toSnakeCase('Title Case');

      expect(snakeCase).toEqual('title_case');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('idCamelCase');

        expect(snakeCase).toEqual('id_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('ID_CONSTANT_CASE');

        expect(snakeCase).toEqual('id_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('id.dot.case');

        expect(snakeCase).toEqual('id_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('ID Header Case');

        expect(snakeCase).toEqual('id_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('id-param-case');

        expect(snakeCase).toEqual('id_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('IDPascalCase');

        expect(snakeCase).toEqual('id_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('id_snake_case');

        expect(snakeCase).toEqual('id_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('ID Title Case');

        expect(snakeCase).toEqual('id_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseID');

        expect(snakeCase).toEqual('camel_case_id');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_ID');

        expect(snakeCase).toEqual('constant_case_id');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.id');

        expect(snakeCase).toEqual('dot_case_id');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case ID');

        expect(snakeCase).toEqual('header_case_id');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-id');

        expect(snakeCase).toEqual('param_case_id');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseID');

        expect(snakeCase).toEqual('pascal_case_id');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_id');

        expect(snakeCase).toEqual('snake_case_id');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case ID');

        expect(snakeCase).toEqual('title_case_id');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelIDCase');

        expect(snakeCase).toEqual('camel_id_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_ID_CASE');

        expect(snakeCase).toEqual('constant_id_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.id.case');

        expect(snakeCase).toEqual('dot_id_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header ID Case');

        expect(snakeCase).toEqual('header_id_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-id-case');

        expect(snakeCase).toEqual('param_id_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalIDCase');

        expect(snakeCase).toEqual('pascal_id_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_id_case');

        expect(snakeCase).toEqual('snake_id_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title ID Case');

        expect(snakeCase).toEqual('title_id_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('id');

        expect(snakeCase).toEqual('id');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('ID');

        expect(snakeCase).toEqual('id');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('id');

        expect(snakeCase).toEqual('id');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('ID');

        expect(snakeCase).toEqual('id');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('id');

        expect(snakeCase).toEqual('id');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('ID');

        expect(snakeCase).toEqual('id');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('id');

        expect(snakeCase).toEqual('id');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('ID');

        expect(snakeCase).toEqual('id');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('idsCamelCase');

        expect(snakeCase).toEqual('ids_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('IDS_CONSTANT_CASE');

        expect(snakeCase).toEqual('ids_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('ids.dot.case');

        expect(snakeCase).toEqual('ids_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('IDs Header Case');

        expect(snakeCase).toEqual('ids_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('ids-param-case');

        expect(snakeCase).toEqual('ids_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('IDsPascalCase');

        expect(snakeCase).toEqual('ids_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('ids_snake_case');

        expect(snakeCase).toEqual('ids_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('IDs Title Case');

        expect(snakeCase).toEqual('ids_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseIDs');

        expect(snakeCase).toEqual('camel_case_ids');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_IDS');

        expect(snakeCase).toEqual('constant_case_ids');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.ids');

        expect(snakeCase).toEqual('dot_case_ids');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case IDs');

        expect(snakeCase).toEqual('header_case_ids');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-ids');

        expect(snakeCase).toEqual('param_case_ids');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseIDs');

        expect(snakeCase).toEqual('pascal_case_ids');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_ids');

        expect(snakeCase).toEqual('snake_case_ids');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case IDs');

        expect(snakeCase).toEqual('title_case_ids');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelIDsCase');

        expect(snakeCase).toEqual('camel_ids_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_IDS_CASE');

        expect(snakeCase).toEqual('constant_ids_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.ids.case');

        expect(snakeCase).toEqual('dot_ids_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header IDs Case');

        expect(snakeCase).toEqual('header_ids_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-ids-case');

        expect(snakeCase).toEqual('param_ids_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalIDsCase');

        expect(snakeCase).toEqual('pascal_ids_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_ids_case');

        expect(snakeCase).toEqual('snake_ids_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title IDs Case');

        expect(snakeCase).toEqual('title_ids_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('ids');

        expect(snakeCase).toEqual('ids');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('IDS');

        expect(snakeCase).toEqual('ids');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('ids');

        expect(snakeCase).toEqual('ids');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('IDs');

        expect(snakeCase).toEqual('ids');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('ids');

        expect(snakeCase).toEqual('ids');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('IDs');

        expect(snakeCase).toEqual('ids');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('ids');

        expect(snakeCase).toEqual('ids');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('IDs');

        expect(snakeCase).toEqual('ids');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('dbCamelCase');

        expect(snakeCase).toEqual('db_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('DB_CONSTANT_CASE');

        expect(snakeCase).toEqual('db_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('db.dot.case');

        expect(snakeCase).toEqual('db_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('DB Header Case');

        expect(snakeCase).toEqual('db_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('db-param-case');

        expect(snakeCase).toEqual('db_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('DBPascalCase');

        expect(snakeCase).toEqual('db_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('db_snake_case');

        expect(snakeCase).toEqual('db_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('DB Title Case');

        expect(snakeCase).toEqual('db_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseDB');

        expect(snakeCase).toEqual('camel_case_db');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_DB');

        expect(snakeCase).toEqual('constant_case_db');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.db');

        expect(snakeCase).toEqual('dot_case_db');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case DB');

        expect(snakeCase).toEqual('header_case_db');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-db');

        expect(snakeCase).toEqual('param_case_db');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseDB');

        expect(snakeCase).toEqual('pascal_case_db');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_db');

        expect(snakeCase).toEqual('snake_case_db');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case DB');

        expect(snakeCase).toEqual('title_case_db');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelDBCase');

        expect(snakeCase).toEqual('camel_db_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_DB_CASE');

        expect(snakeCase).toEqual('constant_db_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.db.case');

        expect(snakeCase).toEqual('dot_db_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header DB Case');

        expect(snakeCase).toEqual('header_db_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-db-case');

        expect(snakeCase).toEqual('param_db_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalDBCase');

        expect(snakeCase).toEqual('pascal_db_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_db_case');

        expect(snakeCase).toEqual('snake_db_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title DB Case');

        expect(snakeCase).toEqual('title_db_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('db');

        expect(snakeCase).toEqual('db');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('DB');

        expect(snakeCase).toEqual('db');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('db');

        expect(snakeCase).toEqual('db');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('DB');

        expect(snakeCase).toEqual('db');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('db');

        expect(snakeCase).toEqual('db');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('DB');

        expect(snakeCase).toEqual('db');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('db');

        expect(snakeCase).toEqual('db');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('DB');

        expect(snakeCase).toEqual('db');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('dbsCamelCase');

        expect(snakeCase).toEqual('dbs_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('DBS_CONSTANT_CASE');

        expect(snakeCase).toEqual('dbs_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dbs.dot.case');

        expect(snakeCase).toEqual('dbs_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('DBs Header Case');

        expect(snakeCase).toEqual('dbs_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('dbs-param-case');

        expect(snakeCase).toEqual('dbs_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('DBsPascalCase');

        expect(snakeCase).toEqual('dbs_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('dbs_snake_case');

        expect(snakeCase).toEqual('dbs_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('DBs Title Case');

        expect(snakeCase).toEqual('dbs_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseDBs');

        expect(snakeCase).toEqual('camel_case_dbs');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_DBS');

        expect(snakeCase).toEqual('constant_case_dbs');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.dbs');

        expect(snakeCase).toEqual('dot_case_dbs');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case DBs');

        expect(snakeCase).toEqual('header_case_dbs');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-dbs');

        expect(snakeCase).toEqual('param_case_dbs');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseDBs');

        expect(snakeCase).toEqual('pascal_case_dbs');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_dbs');

        expect(snakeCase).toEqual('snake_case_dbs');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case DBs');

        expect(snakeCase).toEqual('title_case_dbs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelDBsCase');

        expect(snakeCase).toEqual('camel_dbs_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_DBS_CASE');

        expect(snakeCase).toEqual('constant_dbs_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.dbs.case');

        expect(snakeCase).toEqual('dot_dbs_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header DBs Case');

        expect(snakeCase).toEqual('header_dbs_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-dbs-case');

        expect(snakeCase).toEqual('param_dbs_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalDBsCase');

        expect(snakeCase).toEqual('pascal_dbs_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_dbs_case');

        expect(snakeCase).toEqual('snake_dbs_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title DBs Case');

        expect(snakeCase).toEqual('title_dbs_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('dbs');

        expect(snakeCase).toEqual('dbs');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('DBS');

        expect(snakeCase).toEqual('dbs');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dbs');

        expect(snakeCase).toEqual('dbs');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('DBs');

        expect(snakeCase).toEqual('dbs');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('dbs');

        expect(snakeCase).toEqual('dbs');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('DBs');

        expect(snakeCase).toEqual('dbs');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('dbs');

        expect(snakeCase).toEqual('dbs');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('DBs');

        expect(snakeCase).toEqual('dbs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('graphqlCamelCase');

        expect(snakeCase).toEqual('graphql_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('GRAPHQL_CONSTANT_CASE');

        expect(snakeCase).toEqual('graphql_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('graphql.dot.case');

        expect(snakeCase).toEqual('graphql_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('GraphQL Header Case');

        expect(snakeCase).toEqual('graphql_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('graphql-param-case');

        expect(snakeCase).toEqual('graphql_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('GraphQLPascalCase');

        expect(snakeCase).toEqual('graphql_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('graphql_snake_case');

        expect(snakeCase).toEqual('graphql_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('GraphQL Title Case');

        expect(snakeCase).toEqual('graphql_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseGraphQL');

        expect(snakeCase).toEqual('camel_case_graphql');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_GRAPHQL');

        expect(snakeCase).toEqual('constant_case_graphql');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.graphql');

        expect(snakeCase).toEqual('dot_case_graphql');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case GraphQL');

        expect(snakeCase).toEqual('header_case_graphql');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-graphql');

        expect(snakeCase).toEqual('param_case_graphql');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseGraphQL');

        expect(snakeCase).toEqual('pascal_case_graphql');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_graphql');

        expect(snakeCase).toEqual('snake_case_graphql');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case GraphQL');

        expect(snakeCase).toEqual('title_case_graphql');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelGraphQLCase');

        expect(snakeCase).toEqual('camel_graphql_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_GRAPHQL_CASE');

        expect(snakeCase).toEqual('constant_graphql_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.graphql.case');

        expect(snakeCase).toEqual('dot_graphql_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header GraphQL Case');

        expect(snakeCase).toEqual('header_graphql_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-graphql-case');

        expect(snakeCase).toEqual('param_graphql_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalGraphQLCase');

        expect(snakeCase).toEqual('pascal_graphql_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_graphql_case');

        expect(snakeCase).toEqual('snake_graphql_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title GraphQL Case');

        expect(snakeCase).toEqual('title_graphql_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('graphql');

        expect(snakeCase).toEqual('graphql');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('GRAPHQL');

        expect(snakeCase).toEqual('graphql');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('graphql');

        expect(snakeCase).toEqual('graphql');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('GraphQL');

        expect(snakeCase).toEqual('graphql');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('graphql');

        expect(snakeCase).toEqual('graphql');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('GraphQL');

        expect(snakeCase).toEqual('graphql');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('graphql');

        expect(snakeCase).toEqual('graphql');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('GraphQL');

        expect(snakeCase).toEqual('graphql');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('typeormCamelCase');

        expect(snakeCase).toEqual('typeorm_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('TYPEORM_CONSTANT_CASE');

        expect(snakeCase).toEqual('typeorm_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('typeorm.dot.case');

        expect(snakeCase).toEqual('typeorm_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('TypeORM Header Case');

        expect(snakeCase).toEqual('typeorm_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('typeorm-param-case');

        expect(snakeCase).toEqual('typeorm_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('TypeORMPascalCase');

        expect(snakeCase).toEqual('typeorm_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('typeorm_snake_case');

        expect(snakeCase).toEqual('typeorm_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('TypeORM Title Case');

        expect(snakeCase).toEqual('typeorm_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseTypeORM');

        expect(snakeCase).toEqual('camel_case_typeorm');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_TYPEORM');

        expect(snakeCase).toEqual('constant_case_typeorm');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.typeorm');

        expect(snakeCase).toEqual('dot_case_typeorm');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case TypeORM');

        expect(snakeCase).toEqual('header_case_typeorm');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-typeorm');

        expect(snakeCase).toEqual('param_case_typeorm');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseTypeORM');

        expect(snakeCase).toEqual('pascal_case_typeorm');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_typeorm');

        expect(snakeCase).toEqual('snake_case_typeorm');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case TypeORM');

        expect(snakeCase).toEqual('title_case_typeorm');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelTypeORMCase');

        expect(snakeCase).toEqual('camel_typeorm_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_TYPEORM_CASE');

        expect(snakeCase).toEqual('constant_typeorm_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.typeorm.case');

        expect(snakeCase).toEqual('dot_typeorm_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header TypeORM Case');

        expect(snakeCase).toEqual('header_typeorm_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-typeorm-case');

        expect(snakeCase).toEqual('param_typeorm_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalTypeORMCase');

        expect(snakeCase).toEqual('pascal_typeorm_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_typeorm_case');

        expect(snakeCase).toEqual('snake_typeorm_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title TypeORM Case');

        expect(snakeCase).toEqual('title_typeorm_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('typeorm');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('TYPEORM');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('typeorm');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('TypeORM');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('typeorm');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('TypeORM');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('typeorm');

        expect(snakeCase).toEqual('typeorm');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('TypeORM');

        expect(snakeCase).toEqual('typeorm');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('jsonCamelCase');

        expect(snakeCase).toEqual('json_camel_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('JSON_CONSTANT_CASE');

        expect(snakeCase).toEqual('json_constant_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('json.dot.case');

        expect(snakeCase).toEqual('json_dot_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('JSON Header Case');

        expect(snakeCase).toEqual('json_header_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('json-param-case');

        expect(snakeCase).toEqual('json_param_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('JSONPascalCase');

        expect(snakeCase).toEqual('json_pascal_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('json_snake_case');

        expect(snakeCase).toEqual('json_snake_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('JSON Title Case');

        expect(snakeCase).toEqual('json_title_case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelCaseJSON');

        expect(snakeCase).toEqual('camel_case_json');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_CASE_JSON');

        expect(snakeCase).toEqual('constant_case_json');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.case.json');

        expect(snakeCase).toEqual('dot_case_json');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header Case JSON');

        expect(snakeCase).toEqual('header_case_json');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-case-json');

        expect(snakeCase).toEqual('param_case_json');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalCaseJSON');

        expect(snakeCase).toEqual('pascal_case_json');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_case_json');

        expect(snakeCase).toEqual('snake_case_json');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title Case JSON');

        expect(snakeCase).toEqual('title_case_json');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('camelJSONCase');

        expect(snakeCase).toEqual('camel_json_case');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('CONSTANT_JSON_CASE');

        expect(snakeCase).toEqual('constant_json_case');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('dot.json.case');

        expect(snakeCase).toEqual('dot_json_case');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('Header JSON Case');

        expect(snakeCase).toEqual('header_json_case');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('param-json-case');

        expect(snakeCase).toEqual('param_json_case');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('PascalJSONCase');

        expect(snakeCase).toEqual('pascal_json_case');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('snake_json_case');

        expect(snakeCase).toEqual('snake_json_case');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('Title JSON Case');

        expect(snakeCase).toEqual('title_json_case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const snakeCase: string = toSnakeCase('json');

        expect(snakeCase).toEqual('json');
      });

      it('in CONSTANT_CASE', () => {
        const snakeCase: string = toSnakeCase('JSON');

        expect(snakeCase).toEqual('json');
      });

      it('in dot.case', () => {
        const snakeCase: string = toSnakeCase('json');

        expect(snakeCase).toEqual('json');
      });

      it('in Header Case', () => {
        const snakeCase: string = toSnakeCase('JSON');

        expect(snakeCase).toEqual('json');
      });

      it('in param-case', () => {
        const snakeCase: string = toSnakeCase('json');

        expect(snakeCase).toEqual('json');
      });

      it('in PascalCase', () => {
        const snakeCase: string = toSnakeCase('JSON');

        expect(snakeCase).toEqual('json');
      });

      it('in snake_case', () => {
        const snakeCase: string = toSnakeCase('json');

        expect(snakeCase).toEqual('json');
      });

      it('in Title Case', () => {
        const snakeCase: string = toSnakeCase('JSON');

        expect(snakeCase).toEqual('json');
      });
    });
  });
});
