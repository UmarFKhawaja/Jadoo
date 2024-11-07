import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class SolutionKey {
  @Field((type) => ID)
  id!: string;
}
