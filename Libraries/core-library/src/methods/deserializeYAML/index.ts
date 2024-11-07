import { parse } from 'yaml';

export function deserializeYAML<T>(text: string): T {
  return parse(text) as T;
}
