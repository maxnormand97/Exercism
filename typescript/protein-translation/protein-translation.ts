type DNA = {
  codon: string[],
  protein: string
}

const DNATypes: DNA[] = [
  { codon: ['AUG'], protein: 'Methionine' },
  { codon: ['UUU', 'UUC'], protein: 'Phenylalanine' },
  { codon: ['UUA', 'UUG'], protein: 'Leucine' },
  { codon: ['UCU', 'UCC', 'UCA', 'UCG'], protein: 'Serine' },
  { codon: ['UAU', 'UAC'], protein: 'Tyrosine' },
  { codon: ['UGU', 'UGC'], protein: 'Cysteine' },
  { codon: ['UGG'], protein: 'Tryptophan' },
  { codon: ['UAA', 'UAG', 'UGA'], protein: 'STOP' },
]

export function translate(sequence: string): string[] {
  const result: string[] = []
  let stopSequence = false
  const sequenceArray = sequence.match(/.{1,3}/g) || []
  if (sequenceArray.length === 0) {
    return []
  }
  // Invalid Codon check
  const hasInvalidCharacter = sequenceArray.some(codon => !/^([UAGC]+)$/.test(codon));
  if (hasInvalidCharacter) {
    throw new Error('Invalid codon')
  }
  sequenceArray.forEach((part) => {
    if(stopSequence) {
      return result
    }
    const dnaMatch = DNATypes.find((dna) => dna.codon.includes(part))
    if(!dnaMatch) {
      throw new Error('Invalid codon')
    }
    if (dnaMatch) {
    // you have to return if its a stop DNA
      if (dnaMatch.protein === 'STOP') {
        stopSequence = true
        return result
      }
      result.push(dnaMatch.protein)
    }
    return result
  })
  return result
}
