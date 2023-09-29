import { toDotCase } from '.';

describe('toDotCase', () => {
  describe('should correctly handle string without special cases', () => {
    it('in camelCase', () => {
      const dotCase: string = toDotCase('camelCase');

      expect(dotCase).toEqual('camel.case');
    });

    it('in CONSTANT_CASE', () => {
      const dotCase: string = toDotCase('CONSTANT_CASE');

      expect(dotCase).toEqual('constant.case');
    });

    it('in dot.case', () => {
      const dotCase: string = toDotCase('dot.case');

      expect(dotCase).toEqual('dot.case');
    });

    it('in Header Case', () => {
      const dotCase: string = toDotCase('Header Case');

      expect(dotCase).toEqual('header.case');
    });

    it('in param-case', () => {
      const dotCase: string = toDotCase('param-case');

      expect(dotCase).toEqual('param.case');
    });

    it('in PascalCase', () => {
      const dotCase: string = toDotCase('PascalCase');

      expect(dotCase).toEqual('pascal.case');
    });

    it('in snake_case', () => {
      const dotCase: string = toDotCase('snake_case');

      expect(dotCase).toEqual('snake.case');
    });

    it('in Title Case', () => {
      const dotCase: string = toDotCase('Title Case');

      expect(dotCase).toEqual('title.case');
    });
  });

  describe('should correctly handle string with special case: ID', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('idCamelCase');

        expect(dotCase).toEqual('id.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('ID_CONSTANT_CASE');

        expect(dotCase).toEqual('id.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('id.dot.case');

        expect(dotCase).toEqual('id.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('ID Header Case');

        expect(dotCase).toEqual('id.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('id-param-case');

        expect(dotCase).toEqual('id.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('IDPascalCase');

        expect(dotCase).toEqual('id.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('id_snake_case');

        expect(dotCase).toEqual('id.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('ID Title Case');

        expect(dotCase).toEqual('id.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseID');

        expect(dotCase).toEqual('camel.case.id');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_ID');

        expect(dotCase).toEqual('constant.case.id');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.id');

        expect(dotCase).toEqual('dot.case.id');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case ID');

        expect(dotCase).toEqual('header.case.id');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-id');

        expect(dotCase).toEqual('param.case.id');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseID');

        expect(dotCase).toEqual('pascal.case.id');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_id');

        expect(dotCase).toEqual('snake.case.id');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case ID');

        expect(dotCase).toEqual('title.case.id');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelIDCase');

        expect(dotCase).toEqual('camel.id.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_ID_CASE');

        expect(dotCase).toEqual('constant.id.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.id.case');

        expect(dotCase).toEqual('dot.id.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header ID Case');

        expect(dotCase).toEqual('header.id.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-id-case');

        expect(dotCase).toEqual('param.id.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalIDCase');

        expect(dotCase).toEqual('pascal.id.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_id_case');

        expect(dotCase).toEqual('snake.id.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title ID Case');

        expect(dotCase).toEqual('title.id.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('id');

        expect(dotCase).toEqual('id');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('ID');

        expect(dotCase).toEqual('id');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('id');

        expect(dotCase).toEqual('id');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('ID');

        expect(dotCase).toEqual('id');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('id');

        expect(dotCase).toEqual('id');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('ID');

        expect(dotCase).toEqual('id');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('id');

        expect(dotCase).toEqual('id');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('ID');

        expect(dotCase).toEqual('id');
      });
    });
  });

  describe('should correctly handle string with special case: IDs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('idsCamelCase');

        expect(dotCase).toEqual('ids.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('IDS_CONSTANT_CASE');

        expect(dotCase).toEqual('ids.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('ids.dot.case');

        expect(dotCase).toEqual('ids.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('IDs Header Case');

        expect(dotCase).toEqual('ids.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('ids-param-case');

        expect(dotCase).toEqual('ids.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('IDsPascalCase');

        expect(dotCase).toEqual('ids.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('ids_snake_case');

        expect(dotCase).toEqual('ids.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('IDs Title Case');

        expect(dotCase).toEqual('ids.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseIDs');

        expect(dotCase).toEqual('camel.case.ids');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_IDS');

        expect(dotCase).toEqual('constant.case.ids');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.ids');

        expect(dotCase).toEqual('dot.case.ids');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case IDs');

        expect(dotCase).toEqual('header.case.ids');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-ids');

        expect(dotCase).toEqual('param.case.ids');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseIDs');

        expect(dotCase).toEqual('pascal.case.ids');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_ids');

        expect(dotCase).toEqual('snake.case.ids');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case IDs');

        expect(dotCase).toEqual('title.case.ids');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelIDsCase');

        expect(dotCase).toEqual('camel.ids.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_IDS_CASE');

        expect(dotCase).toEqual('constant.ids.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.ids.case');

        expect(dotCase).toEqual('dot.ids.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header IDs Case');

        expect(dotCase).toEqual('header.ids.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-ids-case');

        expect(dotCase).toEqual('param.ids.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalIDsCase');

        expect(dotCase).toEqual('pascal.ids.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_ids_case');

        expect(dotCase).toEqual('snake.ids.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title IDs Case');

        expect(dotCase).toEqual('title.ids.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('ids');

        expect(dotCase).toEqual('ids');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('IDS');

        expect(dotCase).toEqual('ids');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('ids');

        expect(dotCase).toEqual('ids');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('IDs');

        expect(dotCase).toEqual('ids');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('ids');

        expect(dotCase).toEqual('ids');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('IDs');

        expect(dotCase).toEqual('ids');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('ids');

        expect(dotCase).toEqual('ids');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('IDs');

        expect(dotCase).toEqual('ids');
      });
    });
  });

  describe('should correctly handle string with special case: DB', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('dbCamelCase');

        expect(dotCase).toEqual('db.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('DB_CONSTANT_CASE');

        expect(dotCase).toEqual('db.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('db.dot.case');

        expect(dotCase).toEqual('db.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('DB Header Case');

        expect(dotCase).toEqual('db.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('db-param-case');

        expect(dotCase).toEqual('db.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('DBPascalCase');

        expect(dotCase).toEqual('db.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('db_snake_case');

        expect(dotCase).toEqual('db.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('DB Title Case');

        expect(dotCase).toEqual('db.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseDB');

        expect(dotCase).toEqual('camel.case.db');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_DB');

        expect(dotCase).toEqual('constant.case.db');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.db');

        expect(dotCase).toEqual('dot.case.db');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case DB');

        expect(dotCase).toEqual('header.case.db');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-db');

        expect(dotCase).toEqual('param.case.db');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseDB');

        expect(dotCase).toEqual('pascal.case.db');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_db');

        expect(dotCase).toEqual('snake.case.db');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case DB');

        expect(dotCase).toEqual('title.case.db');
      });
    });

    describe('in the mdbdle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelDBCase');

        expect(dotCase).toEqual('camel.db.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_DB_CASE');

        expect(dotCase).toEqual('constant.db.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.db.case');

        expect(dotCase).toEqual('dot.db.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header DB Case');

        expect(dotCase).toEqual('header.db.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-db-case');

        expect(dotCase).toEqual('param.db.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalDBCase');

        expect(dotCase).toEqual('pascal.db.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_db_case');

        expect(dotCase).toEqual('snake.db.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title DB Case');

        expect(dotCase).toEqual('title.db.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('db');

        expect(dotCase).toEqual('db');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('DB');

        expect(dotCase).toEqual('db');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('db');

        expect(dotCase).toEqual('db');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('DB');

        expect(dotCase).toEqual('db');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('db');

        expect(dotCase).toEqual('db');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('DB');

        expect(dotCase).toEqual('db');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('db');

        expect(dotCase).toEqual('db');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('DB');

        expect(dotCase).toEqual('db');
      });
    });
  });

  describe('should correctly handle string with special case: DBs', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('dbsCamelCase');

        expect(dotCase).toEqual('dbs.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('DBS_CONSTANT_CASE');

        expect(dotCase).toEqual('dbs.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dbs.dot.case');

        expect(dotCase).toEqual('dbs.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('DBs Header Case');

        expect(dotCase).toEqual('dbs.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('dbs-param-case');

        expect(dotCase).toEqual('dbs.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('DBsPascalCase');

        expect(dotCase).toEqual('dbs.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('dbs_snake_case');

        expect(dotCase).toEqual('dbs.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('DBs Title Case');

        expect(dotCase).toEqual('dbs.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseDBs');

        expect(dotCase).toEqual('camel.case.dbs');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_DBS');

        expect(dotCase).toEqual('constant.case.dbs');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.dbs');

        expect(dotCase).toEqual('dot.case.dbs');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case DBs');

        expect(dotCase).toEqual('header.case.dbs');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-dbs');

        expect(dotCase).toEqual('param.case.dbs');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseDBs');

        expect(dotCase).toEqual('pascal.case.dbs');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_dbs');

        expect(dotCase).toEqual('snake.case.dbs');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case DBs');

        expect(dotCase).toEqual('title.case.dbs');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelDBsCase');

        expect(dotCase).toEqual('camel.dbs.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_DBS_CASE');

        expect(dotCase).toEqual('constant.dbs.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.dbs.case');

        expect(dotCase).toEqual('dot.dbs.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header DBs Case');

        expect(dotCase).toEqual('header.dbs.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-dbs-case');

        expect(dotCase).toEqual('param.dbs.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalDBsCase');

        expect(dotCase).toEqual('pascal.dbs.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_dbs_case');

        expect(dotCase).toEqual('snake.dbs.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title DBs Case');

        expect(dotCase).toEqual('title.dbs.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('dbs');

        expect(dotCase).toEqual('dbs');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('DBS');

        expect(dotCase).toEqual('dbs');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dbs');

        expect(dotCase).toEqual('dbs');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('DBs');

        expect(dotCase).toEqual('dbs');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('dbs');

        expect(dotCase).toEqual('dbs');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('DBs');

        expect(dotCase).toEqual('dbs');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('dbs');

        expect(dotCase).toEqual('dbs');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('DBs');

        expect(dotCase).toEqual('dbs');
      });
    });
  });

  describe('should correctly handle string with special case: GraphQL', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('graphqlCamelCase');

        expect(dotCase).toEqual('graphql.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('GRAPHQL_CONSTANT_CASE');

        expect(dotCase).toEqual('graphql.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('graphql.dot.case');

        expect(dotCase).toEqual('graphql.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('GraphQL Header Case');

        expect(dotCase).toEqual('graphql.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('graphql-param-case');

        expect(dotCase).toEqual('graphql.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('GraphQLPascalCase');

        expect(dotCase).toEqual('graphql.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('graphql_snake_case');

        expect(dotCase).toEqual('graphql.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('GraphQL Title Case');

        expect(dotCase).toEqual('graphql.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseGraphQL');

        expect(dotCase).toEqual('camel.case.graphql');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_GRAPHQL');

        expect(dotCase).toEqual('constant.case.graphql');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.graphql');

        expect(dotCase).toEqual('dot.case.graphql');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case GraphQL');

        expect(dotCase).toEqual('header.case.graphql');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-graphql');

        expect(dotCase).toEqual('param.case.graphql');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseGraphQL');

        expect(dotCase).toEqual('pascal.case.graphql');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_graphql');

        expect(dotCase).toEqual('snake.case.graphql');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case GraphQL');

        expect(dotCase).toEqual('title.case.graphql');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelGraphQLCase');

        expect(dotCase).toEqual('camel.graphql.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_GRAPHQL_CASE');

        expect(dotCase).toEqual('constant.graphql.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.graphql.case');

        expect(dotCase).toEqual('dot.graphql.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header GraphQL Case');

        expect(dotCase).toEqual('header.graphql.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-graphql-case');

        expect(dotCase).toEqual('param.graphql.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalGraphQLCase');

        expect(dotCase).toEqual('pascal.graphql.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_graphql_case');

        expect(dotCase).toEqual('snake.graphql.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title GraphQL Case');

        expect(dotCase).toEqual('title.graphql.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('graphql');

        expect(dotCase).toEqual('graphql');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('GRAPHQL');

        expect(dotCase).toEqual('graphql');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('graphql');

        expect(dotCase).toEqual('graphql');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('GraphQL');

        expect(dotCase).toEqual('graphql');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('graphql');

        expect(dotCase).toEqual('graphql');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('GraphQL');

        expect(dotCase).toEqual('graphql');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('graphql');

        expect(dotCase).toEqual('graphql');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('GraphQL');

        expect(dotCase).toEqual('graphql');
      });
    });
  });

  describe('should correctly handle string with special case: TypeORM', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('typeormCamelCase');

        expect(dotCase).toEqual('typeorm.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('TYPEORM_CONSTANT_CASE');

        expect(dotCase).toEqual('typeorm.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('typeorm.dot.case');

        expect(dotCase).toEqual('typeorm.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('TypeORM Header Case');

        expect(dotCase).toEqual('typeorm.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('typeorm-param-case');

        expect(dotCase).toEqual('typeorm.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('TypeORMPascalCase');

        expect(dotCase).toEqual('typeorm.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('typeorm_snake_case');

        expect(dotCase).toEqual('typeorm.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('TypeORM Title Case');

        expect(dotCase).toEqual('typeorm.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseTypeORM');

        expect(dotCase).toEqual('camel.case.typeorm');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_TYPEORM');

        expect(dotCase).toEqual('constant.case.typeorm');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.typeorm');

        expect(dotCase).toEqual('dot.case.typeorm');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case TypeORM');

        expect(dotCase).toEqual('header.case.typeorm');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-typeorm');

        expect(dotCase).toEqual('param.case.typeorm');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseTypeORM');

        expect(dotCase).toEqual('pascal.case.typeorm');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_typeorm');

        expect(dotCase).toEqual('snake.case.typeorm');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case TypeORM');

        expect(dotCase).toEqual('title.case.typeorm');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelTypeORMCase');

        expect(dotCase).toEqual('camel.typeorm.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_TYPEORM_CASE');

        expect(dotCase).toEqual('constant.typeorm.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.typeorm.case');

        expect(dotCase).toEqual('dot.typeorm.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header TypeORM Case');

        expect(dotCase).toEqual('header.typeorm.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-typeorm-case');

        expect(dotCase).toEqual('param.typeorm.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalTypeORMCase');

        expect(dotCase).toEqual('pascal.typeorm.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_typeorm_case');

        expect(dotCase).toEqual('snake.typeorm.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title TypeORM Case');

        expect(dotCase).toEqual('title.typeorm.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('typeorm');

        expect(dotCase).toEqual('typeorm');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('TYPEORM');

        expect(dotCase).toEqual('typeorm');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('typeorm');

        expect(dotCase).toEqual('typeorm');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('TypeORM');

        expect(dotCase).toEqual('typeorm');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('typeorm');

        expect(dotCase).toEqual('typeorm');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('TypeORM');

        expect(dotCase).toEqual('typeorm');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('typeorm');

        expect(dotCase).toEqual('typeorm');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('TypeORM');

        expect(dotCase).toEqual('typeorm');
      });
    });
  });

  describe('should correctly handle string with special case: JSON', () => {
    describe('at the start', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('jsonCamelCase');

        expect(dotCase).toEqual('json.camel.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('JSON_CONSTANT_CASE');

        expect(dotCase).toEqual('json.constant.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('json.dot.case');

        expect(dotCase).toEqual('json.dot.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('JSON Header Case');

        expect(dotCase).toEqual('json.header.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('json-param-case');

        expect(dotCase).toEqual('json.param.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('JSONPascalCase');

        expect(dotCase).toEqual('json.pascal.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('json_snake_case');

        expect(dotCase).toEqual('json.snake.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('JSON Title Case');

        expect(dotCase).toEqual('json.title.case');
      });
    });

    describe('at the end', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelCaseJSON');

        expect(dotCase).toEqual('camel.case.json');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_CASE_JSON');

        expect(dotCase).toEqual('constant.case.json');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.case.json');

        expect(dotCase).toEqual('dot.case.json');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header Case JSON');

        expect(dotCase).toEqual('header.case.json');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-case-json');

        expect(dotCase).toEqual('param.case.json');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalCaseJSON');

        expect(dotCase).toEqual('pascal.case.json');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_case_json');

        expect(dotCase).toEqual('snake.case.json');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title Case JSON');

        expect(dotCase).toEqual('title.case.json');
      });
    });

    describe('in the middle', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('camelJSONCase');

        expect(dotCase).toEqual('camel.json.case');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('CONSTANT_JSON_CASE');

        expect(dotCase).toEqual('constant.json.case');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('dot.json.case');

        expect(dotCase).toEqual('dot.json.case');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('Header JSON Case');

        expect(dotCase).toEqual('header.json.case');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('param-json-case');

        expect(dotCase).toEqual('param.json.case');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('PascalJSONCase');

        expect(dotCase).toEqual('pascal.json.case');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('snake_json_case');

        expect(dotCase).toEqual('snake.json.case');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('Title JSON Case');

        expect(dotCase).toEqual('title.json.case');
      });
    });

    describe('on its own', () => {
      it('in camelCase', () => {
        const dotCase: string = toDotCase('json');

        expect(dotCase).toEqual('json');
      });

      it('in CONSTANT_CASE', () => {
        const dotCase: string = toDotCase('JSON');

        expect(dotCase).toEqual('json');
      });

      it('in dot.case', () => {
        const dotCase: string = toDotCase('json');

        expect(dotCase).toEqual('json');
      });

      it('in Header Case', () => {
        const dotCase: string = toDotCase('JSON');

        expect(dotCase).toEqual('json');
      });

      it('in param-case', () => {
        const dotCase: string = toDotCase('json');

        expect(dotCase).toEqual('json');
      });

      it('in PascalCase', () => {
        const dotCase: string = toDotCase('JSON');

        expect(dotCase).toEqual('json');
      });

      it('in snake_case', () => {
        const dotCase: string = toDotCase('json');

        expect(dotCase).toEqual('json');
      });

      it('in Title Case', () => {
        const dotCase: string = toDotCase('JSON');

        expect(dotCase).toEqual('json');
      });
    });
  });
});
