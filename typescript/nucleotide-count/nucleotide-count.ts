type DNAMatch = {
  A: number;
  C: number;
  G: number;
  T: number;
}

export function nucleotideCounts(nucleotides: string): DNAMatch{
  return nucleotides.split('').reduce((acc, letter) => {
    if(letter === 'A') {
      acc.A += 1
    } else if (letter === 'C') {
      acc.C += 1
    } else if (letter === 'G') {
      acc.G += 1
    } else if (letter === 'T') {
      acc.T += 1
    } else {
      throw new Error('Invalid nucleotide in strand')
    }

    return acc
  }, {A: 0, C: 0, G: 0, T: 0})
}
