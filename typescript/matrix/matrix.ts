export class Matrix {
  private matrix: number[][];

  constructor(matrixString: string) {
    this.matrix = this.formatCode(matrixString);
  }

  private formatCode(code: string) : any {
    return code.split('\n').map(line => line.split(' ').map(Number));
  }

  get rows(): any {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.matrix[0].map((col, i) => this.matrix.map(row => row[i]));
  }
}
