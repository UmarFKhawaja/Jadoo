import { isSpecial } from '../isSpecial';
import { toParamCase } from '../toParamCase';

type Special  = {
  start: string;
  mid: string;
  end: string;
}

export function toHeaderCase(identifier: string): string {
  const specials: Record<string, Special> = {
    id: {
      start: 'ID',
      mid: 'ID',
      end: 'ID'
    },
    ids: {
      start: 'IDs',
      mid: 'IDs',
      end: 'IDs'
    },
    db: {
      start: 'DB',
      mid: 'DB',
      end: 'DB'
    },
    dbs: {
      start: 'DBs',
      mid: 'DBs',
      end: 'DBs'
    },
    ql: {
      start: 'QL',
      mid: 'QL',
      end: 'QL'
    },
    ui: {
      start: 'UI',
      mid: 'UI',
      end: 'UI'
    },
    uis: {
      start: 'UIs',
      mid: 'UIs',
      end: 'UIs'
    },
    graphql: {
      start: 'GraphQL',
      mid: 'GraphQL',
      end: 'GraphQL'
    },
    typeorm: {
      start: 'TypeORM',
      mid: 'TypeORM',
      end: 'TypeORM'
    },
    json: {
      start: 'JSON',
      mid: 'JSON',
      end: 'JSON'
    },
    uuid: {
      start: 'UUID',
      mid: 'UUID',
      end: 'UUID'
    }
  };

  let input: string = toParamCase(identifier);

  const parts: string[] = input.split('-');

  let sections: string[] = parts.map((part: string, index: number): string => {
    if (isSpecial(specials, part)) {
      if (index === 0) {
        return specials[part]!.start;
      }

      if (index === parts.length - 1) {
        return specials[part]!.end;
      }

      return specials[part]!.mid;
    } else {
      const firstLetter: string = part.substring(0, 1)!.toUpperCase();
      const remainingLetters: string = part.substring(1);

      return `${firstLetter}${remainingLetters}`;
    }
  });

  return sections.join('-');
}
