import { singular as toSingularFormImpl } from 'pluralize';

export function toSingularForm(value: string): string {
  return toSingularFormImpl(value);
}
