import { ObjectType } from 'type-graphql';
import { Solution } from '../entities';
import { Page } from '../generics';

@ObjectType()
export class SolutionPage extends Page(Solution) {
}
