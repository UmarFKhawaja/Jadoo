import { SolutionRating } from './SolutionRating';

export interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  rating: SolutionRating;
  authorName: string;
  authorURL: string;
  headerURL: string;
  contentURL: string;
}
