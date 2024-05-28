  export function count(sentence: string): any {
    const wordCounts = new Map<string, number>();
    const words = sentence.toLowerCase().match(/\b\w+'\w+\b|\b\w+\b/g);

    if(words){
      for (let word of words) {
        const count = wordCounts.get(word) || 0;
        wordCounts.set(word, count + 1);
      }
    }
    return wordCounts;
  }
