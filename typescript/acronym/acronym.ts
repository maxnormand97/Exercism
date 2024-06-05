export function parse(phrase: string): string {
  const uppercaseFollowedByLowercase = /(?=[A-Z][a-z])/;
  const hyphen = /-/;
  const space = /\s/;
  const colon = /:/;

  let words = phrase.split(new RegExp(`${uppercaseFollowedByLowercase.source}|${hyphen.source}|${space.source}|${colon.source}`));
  let acronym: string[] = []
  words.forEach((word) => {acronym.push(word.toUpperCase().charAt(0))})
  return acronym.join('')
}