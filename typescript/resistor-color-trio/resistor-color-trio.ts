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

// HORRIBLE come back to this one day!
export function decodedResistorValue(colors: string[]): string {
  let numberArray: number[] = []
  let selectedColorBands: ColorBand[] = []
  let result = ''
  let zeros = ''
  if(colors.length > 3) {
    colors.splice(3)
  }
  colors.forEach((color) => {
    // would it be better to put the color banks into the array?
    let selectedColorBand = colorBands.find((colorBand) => colorBand.color === color)
    if (selectedColorBand) {
      selectedColorBands.push(selectedColorBand)
    }
    // if there is a 3rd element we have to output the number of 0's that the colorBand code is = to
    if (selectedColorBand && numberArray.length < 2) {
      numberArray.push(selectedColorBand.code)
    }
  })

  // converts to ohms
  if(selectedColorBands.length >= 3) {
    // get the last color band number
    const lastElement = selectedColorBands[selectedColorBands.length - 1];
    zeros = '0'.repeat(lastElement.code);
    // if the second band is a zero
    if(selectedColorBands[1].code === 0) {
      zeros = zeros + '0'
      result = selectedColorBands[0].code.toString() + zeros
    } else {
      result = Number(numberArray.join('')) + zeros
    }
  }

  // this whole thing should be a function
  let resistance = Number(result);
  let unit = 'ohms';

  if (resistance >= 1e9) {
    resistance /= 1e9;
    unit = 'gigaohms';
  } else if (resistance >= 1e6) {
    resistance /= 1e6;
    unit = 'megaohms';
  } else if (resistance >= 1e3) {
    resistance /= 1e3;
    unit = 'kiloohms';
  }
  return `${resistance} ${unit}`;
}
