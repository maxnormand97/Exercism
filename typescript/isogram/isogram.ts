const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

export function isIsogram(sentence: string): boolean {
  if(sentence.length === 0) {
    return true;
  }
  let usedLetters = new Set<string>();
  for (const letter of sentence.toLowerCase()) {
    if (alphabet.includes(letter)) {
      if (usedLetters.has(letter)) {
        return false;
      }
      usedLetters.add(letter);
    }
  }
  return true;
}