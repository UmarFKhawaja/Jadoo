export function isSpecial<TSpecial>(specials: Record<string, TSpecial>, part: string): boolean {
  if (!part) {
    return false;
  }

  return Object.keys(specials).indexOf(part) > -1;
}
