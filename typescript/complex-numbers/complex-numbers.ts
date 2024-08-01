export class ComplexNumber {
  private _real: number;
  private _imaginary: number;

  constructor(real: number, imaginary: number) {
    this._real = real;
    this._imaginary = imaginary;
  }

  public get real(): number {
    return this._real
  }

  public get imag(): number {
    return this._imaginary
  }

  public add(other: ComplexNumber): ComplexNumber {
    const real = this._real + other.real
    const imaginary = this._imaginary + other.imag
    return new ComplexNumber(real, imaginary)

  }

  public sub(other: ComplexNumber): ComplexNumber {
    const real = this._real - other.real
    const imaginary = this._imaginary - other.imag
    return new ComplexNumber(real, imaginary)
  }

  public div(other: ComplexNumber): ComplexNumber {
    // `(a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i`.
    const denominator = other.real * other.real + other.imag * other.imag;
    const real = (this._real * other.real + this._imaginary * other.imag) / denominator;
    const imaginary = (this._imaginary * other.real - this._real * other.imag) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  public mul(other: ComplexNumber): ComplexNumber {
    // `(a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i`.
    const real = this._real * other.real - this._imaginary * other.imag;
    const imaginary = this._real * other.imag + this._imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  public get abs(): number {
    // sqrt(a^2 + b^2)`
    return Math.sqrt(this._real * this._real + this._imaginary * this._imaginary)
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag !== 0 ? -this.imag : 0)
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.sin(this.imag)
  )
  }
}
