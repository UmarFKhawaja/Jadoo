export function deserializeJSON<T>(text: string): T {
  return JSON.parse(text) as T;
}
