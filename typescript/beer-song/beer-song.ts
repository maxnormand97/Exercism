const partOne = (bottles: number) => {
  if(bottles === 1){
    return '1 bottle of beer on the wall, 1 bottle of beer.'
  }

  if(bottles === 0){
    return 'No more bottles of beer on the wall, no more bottles of beer.'
  }
  return `${bottles.toString()} bottles of beer on the wall, ${bottles.toString()} bottles of beer.`
}

const partTwo = (bottles: number) => {
  if (bottles === 2) {
    return 'Take one down and pass it around, 1 bottle of beer on the wall.'
  }

  if(bottles === 1){
    return 'Take it down and pass it around, no more bottles of beer on the wall.'
  }

  if(bottles === 0){
    return 'Go to the store and buy some more, 99 bottles of beer on the wall.'
  }

  return `Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`
}

export function verse(index: number): string {
  return partOne(index) + '\n' + partTwo(index).trimStart() + '\n'
}

export function sing(
  initialBottlesCount: number = 99,
  takeDownCount: number = 0
): string {
  let result = ''
  if(initialBottlesCount < takeDownCount) {
    takeDownCount = 0
  }

  for(let i = initialBottlesCount; i >= takeDownCount; i--) {
    result += partOne(i) + '\n' + partTwo(i).trimStart() + '\n'
    if(i !== takeDownCount) {
      result += '\n'
    }
  }
  return result
}
