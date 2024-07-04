export function clean(sequence: string): string {
  if(/[@:!]/.test(sequence)) {
    throw new Error('Punctuations not permitted')
  }
  if(/[a-zA-Z]/.test(sequence)) {
    throw new Error('Letters not permitted')
  }
  let result: string[] = sequence.split('').filter(str => !isNaN(Number(str)) && str !== ' ');
  // more than 11
  if(result.length > 11) {
    throw new Error('More than 11 digits')
  }
  // throw country code error
  if(result.length === 11 && result[0] !== '1') {
    throw new Error('11 digits must start with 1')
  } else if (result.length === 11 && result[0] === '1') {
    // valid 11 digit number check

    result.shift()
    if(result[0] === '1') {
      throw new Error('Area code cannot start with one')
    }

    if(result[3] === "0") {
      throw new Error('Exchange code cannot start with zero')
    }

    if(result[3] === "1") {
      throw new Error('Exchange code cannot start with one')
    }
  }
  // throw error if not long enough
  console.log(result)
  if(result.length < 10) {
    throw new Error('Incorrect number of digits')
  }

  // final check exchange codes
  if(result[3] === "0") {
    throw new Error('Exchange code cannot start with zero')
  }

  if(result[3] === "1") {
    throw new Error('Exchange code cannot start with one')
  }

  // final check of area codes
  if(result[0] === '0') {
    throw new Error('Area code cannot start with zero')
  }

  if(result[0] === '1') {
    throw new Error('Area code cannot start with one')
  }
  return result.join('');
}
