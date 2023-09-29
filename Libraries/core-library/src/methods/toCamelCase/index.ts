import { isSpecial } from '../isSpecial';
import { toParamCase } from '../toParamCase';

type Special  = {
  start: string;
  mid: string;
  end: string;
}

export function toCamelCase(identifier: string): string {
  const specials: Record<string, Special> = {
    id: {
      start: 'id',
      mid: 'ID',
      end: 'ID'
    },
    ids: {
      start: 'ids',
      mid: 'IDs',
      end: 'IDs'
    },
    db: {
      start: 'db',
      mid: 'DB',
      end: 'DB'
    },
    dbs: {
      start: 'dbs',
      mid: 'DBs',
      end: 'DBs'
    },
    ql: {
      start: 'ql',
      mid: 'QL',
      end: 'QL'
    },
    ui: {
      start: 'ui',
      mid: 'UI',
      end: 'UI'
    },
    uis: {
      start: 'uis',
      mid: 'UIs',
      end: 'UIs'
    },
    graphql: {
      start: 'graphQL',
      mid: 'GraphQL',
      end: 'GraphQL'
    },
    typeorm: {
      start: 'typeORM',
      mid: 'TypeORM',
      end: 'TypeORM'
    },
    json: {
      start: 'json',
      mid: 'JSON',
      end: 'JSON'
    },
    uuid: {
      start: 'uuid',
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
      if (index === 0) {
        return part;
      }

      const firstLetter: string = part[0]!.toUpperCase();
      const remainingLetters: string = part.substring(1);

      return `${firstLetter}${remainingLetters}`;
    }
  });

  return sections.join('');
}
