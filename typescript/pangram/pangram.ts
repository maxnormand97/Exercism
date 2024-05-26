    export function isPangram(sentence: string): boolean {
        let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (let char of sentence) {
            if (alphabet.includes(char.toLowerCase())) {
                alphabet.splice(alphabet.indexOf(char.toLowerCase()), 1);
            }
        }
        if (alphabet.length === 0) {
            return true;
        } else {
            return false;
        }
    }
