export function proverb(...keywords: string[]): string {
  let result: string[] = []
  for (let i = 0; i < keywords.length - 1; i++) {
    result.push(`For want of a ${keywords[i]} the ${keywords[i + 1]} was lost.`);
  }
  result.push(`And all for the want of a ${keywords[0]}.`);
  return result.join('\n')
}
