const letters: string = 'abcdefghijklmnopqrstuvwxyz'

export class SimpleCipher {
  public key
  public shiftAmount

  // needs to be okay if its nil
  constructor(key: string = '') {
    this.key = key || this.generateRandomKey()
    this.shiftAmount = 0
  }

  generateRandomKey(): string {
    let randomKey = '';
    for (let i = 0; i < 100; i++) {
      let randomIndex = Math.floor(Math.random() * letters.length);
      randomKey += letters[randomIndex];
    }
    return randomKey;
  }

  encode(sequence: string): string {
    // set var to store encoded version
    let encoded = '';
    // loop through sequence length
    for (let i = 0; i < sequence.length; i++) {
      // find the character
      let plaintextChar = sequence[i];
      // find the key based on the index
      let keyChar = this.key[i % this.key.length];
      // shift the amount based on the key
      let shiftAmount = keyChar.charCodeAt(0) - 97;
      let encodedChar = String.fromCharCode((plaintextChar.charCodeAt(0) - 97 + shiftAmount + 26) % 26 + 97);
      encoded += encodedChar;
    }
    return encoded;
  }

  decode(sequence: string): string {
    let decoded = '';
    for (let i = 0; i < sequence.length; i++) {
      let ciphertextChar = sequence[i];
      let keyChar = this.key[i % this.key.length];
      let shiftAmount = keyChar.charCodeAt(0) - 97;
      let decodedChar = String.fromCharCode((ciphertextChar.charCodeAt(0) - 97 - shiftAmount + 26) % 26 + 97);
      decoded += decodedChar;
    }
    return decoded;
  }
}
