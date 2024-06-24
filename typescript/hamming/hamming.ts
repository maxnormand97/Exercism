export function compute(left: string, right: string): number {
  const leftStrandArray = left.split('')
  const rightStrandArray = right.split('')
  if (leftStrandArray.length === 0 && rightStrandArray.length === 0) {
    return 0
  }
  if(leftStrandArray.length !== rightStrandArray.length) {
    throw new Error('DNA strands must be of equal length.')
  }
  let result = leftStrandArray.reduce((acc, strand, index) => {
    if (rightStrandArray[index] !== strand) {
      acc += 1;
    }
    return acc;
  }, 0);

  return result
}
