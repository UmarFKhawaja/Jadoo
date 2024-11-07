import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetSolutionByIDArgs {
  @Field()
  id!: string;
}
