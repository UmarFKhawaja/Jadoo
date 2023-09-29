import { toHeaderCase } from '../toHeaderCase';

export function toTitleCase(input: string): string {
  return toHeaderCase(input).replace(/-/ig, ' ');
}
