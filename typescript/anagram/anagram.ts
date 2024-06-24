export class Anagram {
  private input: string

  constructor(input: string) {
    this.input = input
  }

  public matches(...potentials: string[]): string[] {
    const inputSorted = this.input.toLowerCase().split('').sort().join('');

    let result = potentials.filter(word => {
      const wordSorted = word.toLowerCase().split('').sort().join('');
      return wordSorted === inputSorted && word.toLowerCase() !== this.input.toLowerCase();
    });
    return result;
  }
}
