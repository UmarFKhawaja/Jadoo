import { toHeaderCase } from '../toHeaderCase';

export function toPascalCase(identifier: string): string {
  return toHeaderCase(identifier).replace(/-/ig, '');
}
