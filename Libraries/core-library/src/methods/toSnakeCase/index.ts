import { toParamCase } from '../toParamCase';

export function toSnakeCase(identifier: string): string {
  return toParamCase(identifier).replace(/-/g, '_');
}
