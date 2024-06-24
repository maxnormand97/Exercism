type TransformValue = { [key: number]: string[] };
type ReturnedTransformValue = { [key: string]: number }

export function transform(input: TransformValue): ReturnedTransformValue {
  // Use reduce and call reducer function
  return Object.entries(input).reduce((accumulator, [key, value]) => {
    const lettersToPush = value.join('').split('');
    // reducer function that calls of each element
    lettersToPush.forEach((letter) => {
      accumulator[letter.toLowerCase()] = Number(key); // Add a new key-value pair to the hash
    });
    // everything gets added into this variable from the reduce function
    return accumulator;
    // Ensure we return as the type defined outside of the function
  }, {} as ReturnedTransformValue);
}
