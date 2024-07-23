type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

type Tri = [number, number, number]

class Triplet {
  a: number
  b: number
  c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  toArray(): Tri {
    return [this.a, this.b, this.c]
  }
}

export function triplets(options: Options): Triplet[] {
  let { minFactor = 1, maxFactor = options.sum, sum } = options;
  let result: Triplet[] = [];

  for (let a = minFactor; a <= maxFactor; a++) {
    for (let b = a + 1; b <= maxFactor; b++) {
      let c = sum - a - b;
      if (c > b && c <= maxFactor && a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}
