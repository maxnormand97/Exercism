// Today, most people in the world use Arabic numerals (0–9).

// To write a Roman numeral we use the following Latin letters, each of which has a value:

// | M    | D   | C   | L   | X   | V   | I   |
// | ---- | --- | --- | --- | --- | --- | --- |
// | 1000 | 500 | 100 | 50  | 10  | 5   | 1   |

// A Roman numeral is a sequence of these letters, and its value is the sum of the letters' values.
// For example, `XVIII` has the value 18 (`10 + 5 + 1 + 1 + 1 = 18`).

// There's one rule that makes things trickier though, and that's that **the same letter cannot be used more than three times in succession**.
// That means that we can't express numbers such as 4 with the seemingly natural `IIII`.
// Instead, for those numbers, we use a subtraction method between two letters.
// So we think of `4` not as `1 + 1 + 1 + 1` but instead as `5 - 1`.
// And slightly confusingly to our modern thinking, we write the smaller number first.
// This applies only in the following cases: 4 (`IV`), 9 (`IX`), 40 (`XL`), 90 (`XC`), 400 (`CD`) and 900 (`CM`).

// Order matters in Roman numerals!
// Letters (and the special compounds above) must be ordered by decreasing value from left to right.

// Here are some examples:

// ```text
//  105 => CV
// ---- => --
//  100 => C
// +  5 =>  V
// ```

// ```text
//  106 => CVI
// ---- => --
//  100 => C
// +  5 =>  V
// +  1 =>   I
// ```

// ```text
//  104 => CIV
// ---- => ---
//  100 => C
// +  4 =>  IV
// ```

// And a final more complex example:

// ```text
//  1996 => MCMXCVI
// ----- => -------
//  1000 => M
// + 900 =>  CM
// +  90 =>    XC
// +   5 =>      V
// +   1 =>       I
// ```

// For this exercise, we are only concerned about traditional Roman numerals, in which the largest number is MMMCMXCIX (or 3,999).

// | M    | D   | C   | L   | X   | V   | I   |
// | ---- | --- | --- | --- | --- | --- | --- |
// | 1000 | 500 | 100 | 50  | 10  | 5   | 1   |

// There's one rule that makes things trickier though, and that's that **the same letter cannot be used more than three times in succession**.
// That means that we can't express numbers such as 4 with the seemingly natural `IIII`.
// Instead, for those numbers, we use a subtraction method between two letters.
// So we think of `4` not as `1 + 1 + 1 + 1` but instead as `5 - 1`.
// And slightly confusingly to our modern thinking, we write the smaller number first.
// This applies only in the following cases: 4 (`IV`), 9 (`IX`), 40 (`XL`), 90 (`XC`), 400 (`CD`) and 900 (`CM`).

type RomanNumeral = {
  character: string,
  value: number
}

const numeralArray: Array<RomanNumeral> = [
  { character: 'M', value: 1000 },
  { character: 'D', value: 500 },
  { character: 'C', value: 100 },
  { character: 'L', value: 50 },
  { character: 'X', value: 10 },
  { character: 'V', value: 5 },
  { character: 'I', value: 1 }
];

// TODO: has to return a numeral string make this required type
export const toRoman = (number: number): string => {
  let result: string = ''
  // const numberToString = Math.abs(number).toString()
  // have to plus all of the relevant stuff together
  // go from the largest first
  // Calc in the thousands
  if(number >= 1000) {
    // calc the M's and add them
    let mAmount = Math.floor(number / 1000);
    for(let i = 0; i < mAmount; i++) {
      console.log(mAmount)
    }
  }
  return result
}

// 'MDCLXVI'
// xit('converts 1666', () => expect(toRoman(1666)).toEqual('MDCLXVI'))


// ```text
//  1996 => MCMXCVI
// ----- => -------
//  1000 => M
// + 900 =>  CM
// +  90 =>    XC
// +   5 =>      V
// +   1 =>       I
// ```


// const toRoman = (number: number): string => {
//   let result: string[] = []
//   const mAmount = Math.floor(number / 1000);
//   const cAmount = Math.floor(number / 100);
//   // calc the last digits seperatly?
//   console.log(mAmount, "M")
//   console.log(cAmount, "C")
//   // go from the largest first
//   // Calc in the thousands
//   if(mAmount !== 0) {
//     // could be another function we will need to loop each time
//     for(let i = 0; i < mAmount; i++) {
//       result.push('M')
//     }
//   }
//   // calc the C's amount
//   // need to take this out
//   // NOTE: we don't need to branch this off we can just use a function
//   if(cAmount !== 0) {
//     // could just get the last digit and use that here
//     let convert100 = number.toString().substring(1)
//     const cNum = parseInt(convert100)
//     // change this
//     let cAmount = Math.floor(cNum / 100);
//     if(cAmount > 5) {
//       // need to calc if its before the 10
//       if(cAmount === 9) {
//         // add CM
//         result.push('CM')
//       }
//       // add D
//       result.push('D')
//       // add the C's
//       // adding too many c's 
//       if(cAmount === 8) {
//         result.push('CCC')
//       }
//       if(cAmount === 7) {
//         result.push('CC')
//       }
//       if(cAmount === 6) {
//         result.push('C')
//       }
//     } else if(cAmount === 4) {
//       // add CD
//       result.push('CD')
//     } else if (cAmount >= 3) {
//       // just add C on cAmount times
//       for(let i = 0; i < cAmount; i++) {
//         result.push('C')
//       }
//     }
//   }

//   // handle the smaller digits
//   let strNum = number.toString();
//   let firstTwoDigits = strNum.substring(0, 0);
//   // better name
//   const lastbits = parseInt(firstTwoDigits)
//   console.log(lastbits, 'LAST')


//   return result.join('')
// }
type RomanNumeral = {
  character: string,
  value: number
}

const numeralArray: Array<RomanNumeral> = [
  { character: 'M', value: 1000 },
  { character: 'D', value: 500 },
  { character: 'C', value: 100 },
  { character: 'L', value: 50 },
  { character: 'X', value: 10 },
  { character: 'V', value: 5 },
  { character: 'I', value: 1 }
];

const toRoman = (number: number): string => {
  let result: string[] = []
  const mAmount = Math.floor(number / 1000);
  const cAmount = Math.floor(number / 100);
  // calc the last digits seperatly?
  console.log(mAmount, "M")
  console.log(cAmount, "C")
  // go from the largest first
  // Calc in the thousands
  if(mAmount !== 0) {
    // could be another function we will need to loop each time
    for(let i = 0; i < mAmount; i++) {
      result.push('M')
    }
  }
  // calc the C's amount
  // need to take this out
  // NOTE: we don't need to branch this off we can just use a function
  if(cAmount !== 0) {
    // could just get the last digit and use that here
    let convert100 = number.toString().substring(1)
    const cNum = parseInt(convert100)
    // change this
    let cAmount = Math.floor(cNum / 100);
    if(cAmount > 5) {
      // need to calc if its before the 10
      if(cAmount === 9) {
        // add CM
        result.push('CM')
      }
      // add D
      result.push('D')
      // add the C's
      // adding too many c's 
      if(cAmount === 8) {
        result.push('CCC')
      }
      if(cAmount === 7) {
        result.push('CC')
      }
      if(cAmount === 6) {
        result.push('C')
      }
    } else if(cAmount === 4) {
      // add CD
      result.push('CD')
    } else {
      // just add C on cAmount times
      for(let i = 0; i < cAmount; i++) {
        result.push('C')
      }
    }
  }

  // handle the smaller digits
  let numArray = number.toString().split('')
  let lastTwoElements = numArray.slice(-2);
  // console.log(lastTwoElements)
  let xNum = parseInt(lastTwoElements[0])
  if(lastTwoElements.length > 1 && lastTwoElements[0] !== '0') {
    // calc from 99
    // let xNum = parseInt(lastTwoElements[0])
    // console.log(xNum, 'X NUM')
    if(xNum === 9) {
      result.push('XC')
    }
    // add L
    result.push('L')
    if(cAmount === 8) {
      result.push('XXX')
    }
    if(cAmount === 7) {
      result.push('XX')
    }
    if(cAmount === 6) {
      result.push('X')
    }
  } else if (xNum === 4) {
    result.push('XL')
  } else {
    for(let i = 0; i < xNum; i++) {
      result.push('X')
    }
  }
  // calc down from 99
  // if


  return result.join('')
}


console.log(toRoman(90)) 



// // TODO: has to return a numeral string make this required type
// const toRoman = (num: number): string => {
//   // split the number into an array
//   let result: string[] = []
//   const numberSplit = num.toString().split('')
//   numberSplit.forEach((num, index) => {
//     // add the thousands
//     if(numberSplit.length >= 4 && index === 0) {
//       // console.log(index,'only once')
//       // parseInt(num)
//       addAmount(parseInt(num), 'M', result)
//     }
//     // add the hundres
//     // if(numberSplit.length >= 3)
//   })

//   return result.join('')
// }

// const addAmount = (amount: number, character: string, result: string[]) => {
//   for(let i = 0; i < amount; i++) {
//     result.push(character)
//   }
// }