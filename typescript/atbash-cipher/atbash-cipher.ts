type LetterCode = {
  letter: string;
  code: number;
}

const alphabet: LetterCode[] = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index) => ({
  letter,
  code: index + 1,
}));

const cipher: LetterCode[] = 'zyxwvutsrqponmlkjihgfedcba'.split('').map((letter, index) => ({
  letter,
  code: index + 1,
}));

function findLetterAndPushCode(letter: string, array: LetterCode[], output: (string | number)[]): any {
  const found = array.find(character => character.letter === letter);
  if (found) output.push(found.code);
}

function findCodeAndPushLetter(code: string | number, array: LetterCode[], output: string[]): any {
  if (typeof code === 'string') {
    output.push(code);
  } else {
    const found = array.find(character => character.code === code);
    if (found) output.push(found.letter);
  }
}

export function encode(plainText: string): string {
  const splitText = plainText.toLowerCase().split('').filter(char => /[a-zA-Z0-9]/.test(char));
  const lettersToDecode = splitText.reduce((acc, letter) => {
    if (!isNaN(Number(letter))) {
      acc.push(letter);
    } else {
      findLetterAndPushCode(letter, alphabet, acc);
    }
    return acc;
  }, [] as (string | number)[]);

  const encodedLetters = lettersToDecode.reduce((acc, code) => {
    findCodeAndPushLetter(code, cipher, acc);
    return acc;
  }, [] as string[]);

  return encodedLetters.join('').split('').map((char, index) => ((index + 1) % 5 === 0) ? char + ' ' : char).join('').trim();
}

export function decode(cipherText: string): string {
  const splitCipher = cipherText.trim().split('').filter(char => char !== ' ');
  const lettersToDecode = splitCipher.reduce((acc, letter) => {
    if (!isNaN(Number(letter))) {
      acc.push(letter);
    } else {
      findLetterAndPushCode(letter, cipher, acc);
    }
    return acc;
  }, [] as (string | number)[]);

  const decodedLetters = lettersToDecode.reduce((acc, code) => {
    findCodeAndPushLetter(code, alphabet, acc);
    return acc;
  }, [] as string[]);

  return decodedLetters.join('');
}