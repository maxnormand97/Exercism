export function valid(digitString: string): boolean {
  const regex = /[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if(regex.test(digitString)) {
    return false
  }
    // going to have to convert digitString to an array of numbers
    let digits = digitString.split('').filter(char => /\d/.test(char)).map(Number)

    if(digits.length < 1 || (digits[0] === 0 && digits.length === 1)) {
      return false
    }

    let counter = 0;
    for (let index = digits.length - 1; index >= 0; index--) {
      counter++;
      if (counter % 2 === 0) {
        let newDigit = digits[index] *= 2
        if(newDigit > 9) {
          digits[index] = newDigit - 9
        }
      }
    }

    let total = digits.reduce((total, num) => total + num, 0);
    if (total % 10 === 0) {
       return true
    } else {
     return false
    }
}
