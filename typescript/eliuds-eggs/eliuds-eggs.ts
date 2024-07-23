export const eggCount = (displayValue: number): number => {
  if (displayValue === 0) {
    return 0
  }
  // convert this input number to binary
  let displayBinary = displayValue.toString(2)
  // for each 1 we need to add to the count
  return displayBinary.split('').reduce((acc, num) => {
    if(num === '1') {
      acc += 1
    }
    return acc
  }).split('').length
}
