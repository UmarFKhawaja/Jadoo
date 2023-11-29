import * as Chance from 'chance';
import { nanoid } from 'nanoid';
import { Solution, SolutionRating } from '@jadoo/ui-module';

interface ChanceNanoIDMixin {
  nanoid(): string;
}

interface ChanceSolutionMixin {
  solution(): Solution;
}

const chance = new Chance() as Chance.Chance & ChanceNanoIDMixin & ChanceSolutionMixin;

const TASTES: string[] = [
  'Spicy',
  'Tangy',
  'Grilled',
  'Roasted',
  'Baked'
];

const MEATS: string[] = [
  'Beef',
  'Mutton',
  'Chicken',
  'Fish'
];

const STYLES: string[] = [
  'Fillets',
  'Bites',
  'Meatballs',
  'Strips',
  'Casserole'
];

const RATINGS: SolutionRating[] = [
  'outstanding',
  'unique',
  'default'
];

chance.mixin({
  'nanoid': () => {
    return nanoid(12);
  },
  'solution': () => {
    const id: string = chance.nanoid();

    const title: string = [
      chance.pickone(TASTES),
      chance.pickone(MEATS),
      chance.pickone(STYLES)
    ]
      .join(' ');

    const slug: string = title
      .toLowerCase()
      .replace(' ', '-');

    const description: string = chance.paragraph();

    const rating: SolutionRating = chance.pickone(RATINGS);

    const authorName: string = [
      chance.first(),
      chance.last()
    ]
      .join(' ');

    const authorURL: string = chance.avatar();

    const headerURL: string = 'https://source.unsplash.com/random/200/?food';

    const contentURL: string = `/view/solution/${id}/${slug}`;

    const solution: Solution = {
      id,
      title,
      slug,
      description,
      rating,
      authorName,
      authorURL,
      headerURL,
      contentURL
    };

    return solution;
  }
});

export default chance;
