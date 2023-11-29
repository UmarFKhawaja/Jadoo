import { stringify } from 'yaml';

export function serializeYAML<T>(value: T): string {
  return stringify(value).trim();
}
