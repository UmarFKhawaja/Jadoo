import { Field, InputType } from 'type-graphql';

@InputType()
export class SolutionInput {
  @Field()
  title!: string;

  @Field()
  description!: string;
}
