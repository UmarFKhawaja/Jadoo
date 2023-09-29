import { plural as toPluralFormImpl } from 'pluralize';

export function toPluralForm(value: string): string {
  return toPluralFormImpl(value);
}
