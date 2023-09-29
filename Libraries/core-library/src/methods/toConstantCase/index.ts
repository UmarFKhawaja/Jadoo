import { toParamCase } from '../toParamCase';

export function toConstantCase(identifier: string): string {
  return toParamCase(identifier).replace(/-/g, '_').toUpperCase();
}
