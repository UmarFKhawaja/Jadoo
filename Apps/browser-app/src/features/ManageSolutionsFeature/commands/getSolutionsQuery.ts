import { query, types, alias } from 'typed-graphqlify';

export const getSolutionsQuery = () => query('GetSolutions', {
  [alias('getSolutions', 'getUser')]: {
    id: types.string,
    displayName: types.string,
    userName: types.string,
    emailAddress: types.string,
    solutions: {
      id: types.string,
      title: types.string,
      description: types.string
    }
  }
});
