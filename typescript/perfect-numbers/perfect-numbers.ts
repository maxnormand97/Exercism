export const classify = (n: number) => {
  // throw error if the num is negative or 0
  if (n < 1)
    throw new Error('Classification is only possible for natural numbers.');
  let sum = 0;
  // begin loop increment through number
  for (let factor = 1; factor < n; factor++)
    // check to see if num is divisible by factor
    if (n % factor === 0)
      sum += factor;
  return sum === n
    ? 'perfect'
    : sum > n
    ? 'abundant'
    : 'deficient';
}