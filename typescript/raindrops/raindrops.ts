const pling: string = 'Pling'
const plong: string = 'Plong'
const plang: string = 'Plang'

export function convert(number: number): string {
  let result = ''
  if(number % 3 == 0) {
    result = result + pling
  }
  if (number % 5 == 0) {
    result = result + plang
  }
  if (number % 7 == 0) {
    result = result + plong
  }
  if (result === '') {
    result = number.toString()
  }
  return result
}
