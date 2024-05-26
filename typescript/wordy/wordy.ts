const keywords = ['plus', 'multiplied'];

function formatQuestion(str: string): any[] {
  str = str.replace('?', ''); // Remove the trailing question mark
  const parts = str.split(' ');
  return parts.filter(part => !isNaN(Number(part)) || keywords.includes(part));
}

function runOperation(operation: any[]): number {
  const operations: { [key: string]: (a: number, b: number) => number } = {
    'plus': (a: number, b: number) => a + b,
    'multiply': (a: number, b: number) => a * b,
    'minus': (a: number, b: number) => a - b
  };

  let result = Number(operation[0]);

  for (let i = 1; i < operation.length; i += 2) {
    const op = operations[operation[i] as keyof typeof operations];
    const number = Number(operation[i + 1]);

    if (op && !isNaN(number)) {
      result = op(result, number);
    }
  }
  console.log(result);

  return result;
}

export function answer(question: string): number {
  let result = 0;
  let operation = formatQuestion(question);
  // console.log(operation);
  // Check if only a number is present in the string
  if (operation.length === 1 && /\d/.test(question)){
    // would be better if we could get the number before this...
    const result = question.match(/\d+/);
    return result ? Number(result[0]) : 0;
  } else {
    // console.log('Lets do some math!')
    result = runOperation(operation)
    // console.log(result)
    return result
  }
}