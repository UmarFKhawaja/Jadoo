type Key =
  | 'start'
  | 'mid'
  | 'end'
  | 'eq';

type Matchers = Record<Key, RegExp>;

type Replacements = Record<Key, string>;

interface Special {
  matchers: Matchers;
  replacements: Replacements;
}

interface Options {
  splitRegExps: RegExp[];
  stripRegExps: RegExp[];
  delimiter: string;
  transform: (result: string, index: number) => string;
}

const OPTIONS: Options = {
  splitRegExps: [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  stripRegExps: [/[^A-Z0-9]+/gi],
  delimiter: '-',
  transform: (result: string, index: number) => result.toLowerCase()
};

export function toParamCase(identifier: string): string {
  const specials: Record<string, Special> = {
    ids: {
      matchers: {
        start: /^i-ds-/,
        mid: /-i-ds-/,
        end: /-i-ds$/,
        eq: /^i-ds$/
      },
      replacements: {
        start: 'ids-',
        mid: '-ids-',
        end: '-ids',
        eq: 'ids'
      }
    },
    dbs: {
      matchers: {
        start: /^d-bs-/,
        mid: /-d-bs-/,
        end: /-d-bs$/,
        eq: /^d-bs$/
      },
      replacements: {
        start: 'dbs-',
        mid: '-dbs-',
        end: '-dbs',
        eq: 'dbs'
      }
    },
    uis: {
      matchers: {
        start: /^u-is-/,
        mid: /-u-is-/,
        end: /-u-is$/,
        eq: /^u-is$/
      },
      replacements: {
        start: 'uis-',
        mid: '-uis-',
        end: '-uis',
        eq: 'uis'
      }
    },
    graphql: {
      matchers: {
        start: /^graph-ql-/,
        mid: /-graph-ql-/,
        end: /-graph-ql$/,
        eq: /^graph-ql$/
      },
      replacements: {
        start: 'graphql-',
        mid: '-graphql-',
        end: '-graphql',
        eq: 'graphql'
      }
    },
    typeorm: {
      matchers: {
        start: /^type-orm-/,
        mid: /-type-orm-/,
        end: /-type-orm$/,
        eq: /^type-orm$/
      },
      replacements: {
        start: 'typeorm-',
        mid: '-typeorm-',
        end: '-typeorm',
        eq: 'typeorm'
      }
    },
    json: {
      matchers: {
        start: /^json-/,
        mid: /-json-/,
        end: /-json/,
        eq: /^json$/
      },
      replacements: {
        start: 'json-',
        mid: '-json-',
        end: '-json',
        eq: 'json'
      }
    },
    uuid: {
      matchers: {
        start: /^uuid-/,
        mid: /-uuid-/,
        end: /-uuid/,
        eq: /^uuid$/
      },
      replacements: {
        start: 'uuid-',
        mid: '-uuid-',
        end: '-uuid',
        eq: 'uuid'
      }
    }
  };

  const { splitRegExps, stripRegExps, delimiter, transform } = OPTIONS;

  function replace(input: string, value: string, regExps: RegExp[]): string {
    return regExps.reduce((output: string, regExp: RegExp) => output.replace(regExp, value), input);
  }

  let result: string = replace(replace(identifier.trim(), '$1\0$2', splitRegExps), '\0', stripRegExps);

  result = result.split('\0').map(transform).join(delimiter);

  return Object.entries(specials).reduce((result: string, [key, special]: [string, Special]): string => {
    const { matchers, replacements }: Special = special;

    result = Object.entries(matchers).reduce((word: string, [name, matcher]: [string, RegExp]): string => {
      const replacement: string = replacements[name as Key];

      word = word.replace(matcher, replacement);

      return word;
    }, result);

    return result;
  }, result);
}
