export function score(sentence: string | undefined): number {
  let score = 0;
  // could use a type for this?
  const onePointLetters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const twoPointLetters = ['D', 'G']
  const threePointLetters = ['B','C','M','P']
  const fourPointLetters = ['F', 'H', 'V', 'W', 'Y']
  const fivePointLetters = ['K']
  const eightPointLetters = ['J', 'X']
  const tenPointLetters = ['Q', 'Z']
  // can take in undefined
  if(sentence === undefined) {
    return score
  }
  const wordArray = sentence.split('')
  wordArray.forEach(word => {
    word = word.toUpperCase()
    switch (true) {
      case onePointLetters.includes(word):
        score += 1
        break;
      case twoPointLetters.includes(word):
        score += 2
        break;
      case threePointLetters.includes(word):
        score += 3
        break;
      case fourPointLetters.includes(word):
        score += 4
        break;
      case fivePointLetters.includes(word):
        score += 5
        break;
      case eightPointLetters.includes(word):
        score += 8
        break;
      case tenPointLetters.includes(word):
        score += 10
        break;
    }
  });
  return score;
}
