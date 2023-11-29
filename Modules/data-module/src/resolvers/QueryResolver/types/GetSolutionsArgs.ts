import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class GetSolutionsArgs {
  @Field((type) => Int)
  skip: number = 0;

  @Field((type) => Int)
  take: number = 10;
}
