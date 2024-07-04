export class Rational {
  public numerator
  public denominator

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator
    this.denominator = denominator
  }

  // needs to take in a new rational number
  add(instance: Rational): Rational {
    // 1. find common denominator
    let commonDenominator = this.denominator * instance.denominator
    // 2. adjust numerators
    let numeratorSum = this.numerator * instance.denominator + instance.numerator * this.denominator
    // 3. return the new Rational number type
    const gcd = this.gcd(numeratorSum, commonDenominator);
    return new Rational(numeratorSum / gcd, commonDenominator / gcd);
  }

  // find the greatest common divisor, we have to reduce it if we can
  private gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  sub(instance: Rational): Rational {
    // find the common denominators which is both denomiators multiplied
    const greatestCommonDenominator = this.denominator * instance.denominator
    // Adjust the numerators: Multiply each numerator by the denominator of the other fraction. This gives you 1 * 3 = 3 and 2 * 2 = 4.
    let numeratorASum = this.numerator * instance.denominator
    let numeratorBsum = instance.numerator * this.denominator
    // subtract the result
    let commonNumerator = numeratorASum - numeratorBsum
    const gcd = this.gcd(commonNumerator, greatestCommonDenominator);
    return new Rational(commonNumerator / gcd, greatestCommonDenominator / gcd);
  }

  mul(instance: Rational): Rational {
    // multiply the numerators
    const numeratorSum = this.numerator * instance.numerator
    // multiply the denominators
    const denominatorSum = this.denominator * instance.denominator
    // return the simplified fraction
    const gcd = this.gcd(numeratorSum, denominatorSum);
    return new Rational(numeratorSum / gcd, denominatorSum / gcd)
  }

  div(instance: Rational): Rational | any {
    // find the reciprocal of the divisor and multiply
    const reciprocalA = this.numerator * instance.denominator;
    const reciprocalB = this.denominator * instance.numerator;

    // calculate the sign of the result
    const sign = (reciprocalA < 0) === (reciprocalB < 0) ? 1 : -1;

    // use the absolute values to calculate the gcd and simplify the result
    const gcd = this.gcd(Math.abs(reciprocalA), Math.abs(reciprocalB));
    return new Rational(sign * Math.abs(reciprocalA) / gcd, Math.abs(reciprocalB) / gcd);
  }

  abs(): Rational {
    // to find the absolute we simplify the rational number we need to convert them to be positive always
    const absNumerator = Math.abs(this.numerator);
    const absDenominator = Math.abs(this.denominator);
    const gcd = this.gcd(absNumerator, absDenominator);
    return new Rational(absNumerator / gcd, absDenominator / gcd);
  }

  exprational(n: number): Rational {
    if (n === 0) {
      // Any number raised to the power of zero is 1
      return new Rational(1, 1);
    }

    // Determine the sign of the result
    const sign = this.numerator < 0 && n % 2 !== 0 ? -1 : 1;

    // Calculate the absolute values of the numerator and the denominator
    const absNumerator = Math.abs(this.numerator);
    const absDenominator = Math.abs(this.denominator);

    if (n < 0) {
      // If the exponent is negative, invert the fraction and use the absolute value of the exponent
      return new Rational(sign * Math.pow(absDenominator, Math.abs(n)), Math.pow(absNumerator, Math.abs(n)));
    } else {
      // If the exponent is positive, raise both the numerator and the denominator to the power of the exponent
      return new Rational(sign * Math.pow(absNumerator, n), Math.pow(absDenominator, n));
    }
  }

  expreal(n: number): number {
    return Math.pow(n, this.numerator/this.denominator);
  }

  reduce(): Rational {
    const gcd = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
    const sign = (this.numerator < 0) === (this.denominator < 0) ? 1 : -1;
    return new Rational(sign * Math.abs(this.numerator) / gcd, Math.abs(this.denominator) / gcd);
  }
}
