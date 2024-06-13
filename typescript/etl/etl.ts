type ParamType = { [key: number]: string[] };
type ReturnType = { [key: string]: number }

export function transform(input: ParamType): ReturnType {
  let returnValue: ReturnType = {}; // Specify the type of returnValue as ReturnType
  for (const [key, value] of Object.entries(input)) {
    let lettersToPush = value.join('').split('')
    lettersToPush.forEach((letter) => {
      returnValue[letter.toLowerCase()] = Number(key); // Add a new key-value pair to the hash
    })
  }
  return returnValue
}
