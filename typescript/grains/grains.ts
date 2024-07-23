export const square = (squareNum: number): bigint => {
  if(squareNum < 1 || squareNum > 64) {
    throw new Error()
  }
  return 2n ** BigInt(squareNum - 1);
}

export const total = (): bigint => {
  return BigInt(2n ** 64n - 1n);
}
