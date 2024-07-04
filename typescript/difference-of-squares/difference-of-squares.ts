export class Squares {
  private count

  constructor(count: number) {
    this.count = count
  }

  get sumOfSquares(): number {
    // 1² + 2² + ... + 10² = 385.
    let sum = 0
    // each number is multiplied by itself
    for(let i = 1; i <= this.count; i++) {
      sum += i * i
    }
    return sum
  }

  get squareOfSum(): number {
    // (1 + 2 + ... + 10)² = 55² = 3025
    // need to find the sum from the count
    let sum = 0
    // loop through the count and keep incrementing the sum from the loop count
    for(let i = 1; i <= this.count; i++) {
      sum += i;
    }
    return sum * sum
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
