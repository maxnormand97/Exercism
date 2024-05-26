function convertToBinary(number: number): number[] {
  let binaryString = number.toString(2);
  return binaryString.split("").map(Number);
}

export function commands(command: number): string[] {
  const wink = "wink";
  const doubleBlink = "double blink";
  const closeYourEyes = "close your eyes";
  const jump = "jump";

  let secretCode = [];
  if(command === 0){
    return []
  }

  // NOTE: the array can only have 5 elements
  let numberArray = convertToBinary(command);
  // loop through the numberArray starting from the last element
  for (let i = numberArray.length - 1; i >= 0; i--) {
    // first pass
    if(numberArray[i] === 1 && i === numberArray.length - 1) {
      secretCode.push(wink);
    }
    // second pass
    if(numberArray[i] === 1 && i === numberArray.length - 2) {
      secretCode.push(doubleBlink);
    }
    // third pass
    if(numberArray[i] === 1 && i === numberArray.length - 3) {
      secretCode.push(closeYourEyes);
    }
    // fourth pass
    if(numberArray[i] === 1 && i === numberArray.length - 4) {
      secretCode.push(jump);
    }
    // fifth pass
    if(numberArray[i] === 1 && i === numberArray.length - 5) {
      secretCode.reverse();
    }
  }
  return secretCode;
}
