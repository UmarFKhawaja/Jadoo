import { params, query, types } from 'typed-graphqlify';

export const getSolutionsQuery = (skip: number, take: number) => query('GetSolutions', {
  getSolutions: params({
    skip,
    take
  }, {
    items: {
      id: types.string,
      title: types.string,
      description: types.string
    },
    skip: types.number,
    take: types.number,
    count: types.number,
    hasMore: types.boolean
  })
});
