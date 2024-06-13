type ColorBand = {
  color: string,
  code: number
}

const colorBands: ColorBand[] = [
   {color: 'black', code: 0},
   {color: 'brown', code: 1},
   {color: 'red', code: 2},
   {color: 'orange', code: 3},
   {color: 'yellow', code: 4},
   {color: 'green', code: 5},
   {color: 'blue', code: 6},
   {color: 'violet', code: 7},
   {color: 'grey', code: 8},
   {color: 'white', code: 9}
]

export function decodedValue(colors: string[]): number {
  // better to give it an array of numbers?
  let result: number[] = []
  colors.forEach((color) => {
    let selectedColorBand = colorBands.find((colorBand) => colorBand.color === color)
    // If color band is present and there can only be 2 in the array
    if (selectedColorBand && result.length < 2) {
      result.push(selectedColorBand.code)
    }
  })
  return Number(result.join(''))
}
