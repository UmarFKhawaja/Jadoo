import { toParamCase } from '../toParamCase';

export function toDotCase(identifier: string): string {
  return toParamCase(identifier).replace(/-/g, '.');
}
