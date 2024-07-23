export function steps(count: number): number {
  if (count === 0 || count < 0 || count !== Math.floor(count)) {
    throw new Error('Only positive integers are allowed')
  }

  let result = 0

  if(count === 1) {
    return result
  }

  while (true) {
    if(count % 2 === 0) {
      count = count / 2
    } else {
      count = count * 3 + 1
    }
    result++
    if(count === 1) {
      break;
    }
  }
  return result
}
