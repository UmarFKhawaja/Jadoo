export function joinLines(separator: string, ...lines: string[]): string {
  return lines.filter((line: string): boolean => !!line).join(separator);
}
