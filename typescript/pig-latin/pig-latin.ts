
export function translate(phrase: string): string {
  return phrase.split(' ').map(word => {
    // Regular expression to match the first group of consonants
    let consonantPattern = /^[^aeiouy]+/;
    // Regular expression to match 'qu' following the first group of consonants
    let quPattern = /^[^aeiouy]*qu/;
    // Special case for 'y' at the beginning of a word
    let yPattern = /^y/;

    // Find the first group of consonants followed by 'qu'
    let quConsonants = word.match(quPattern);

    if (quConsonants) {
      // If the word starts with one or more consonants followed by 'qu', move them to the end and add 'ay'
      return word.replace(quPattern, '') + quConsonants[0] + 'ay';
    } else if (word.match(yPattern)) {
      // If the word starts with 'y', treat it as a consonant
      return word.slice(1) + word[0] + 'ay';
    } else {
      // Find the first group of consonants
      let consonants = word.match(consonantPattern);

      if (consonants) {
        // If the word starts with one or more consonants, move them to the end and add 'ay'
        return word.replace(consonantPattern, '') + consonants[0] + 'ay';
      } else {
        // If the word starts with a vowel, just add 'ay' to the end
        return word + 'ay';
      }
    }
  }).join(' ');
}
