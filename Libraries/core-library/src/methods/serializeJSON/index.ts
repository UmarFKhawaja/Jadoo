export function serializeJSON<T>(value: T): string {
  return JSON.stringify(value, undefined, 2).trim();
}
