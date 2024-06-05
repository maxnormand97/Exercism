export class Triangle {
  private sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  private isValidTriangle(): boolean {
    const [a, b, c] = this.sides;
    return a + b >= c && a + c >= b && b + c >= a && a > 0 && b > 0 && c > 0;
  }

  get isEquilateral(): boolean {
    const [a, b, c] = this.sides;
    return this.isValidTriangle() && a === b && b === c;
  }

  get isIsosceles(): boolean {
    const [a, b, c] = this.sides;
    return this.isValidTriangle() && (a === b || b === c || a === c);
  }

  get isScalene(): boolean {
    const [a, b, c] = this.sides;
    return this.isValidTriangle() && a !== b && b !== c && a !== c;
  }
}