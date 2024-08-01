export function isValid(isbn: string): boolean {
  let isbnArray = isbn.replace(/-/g, '').split('');

  // Check length
  if (isbnArray.length !== 10) {
    return false;
  }

  // Check for non-numeric characters except for 'X' at the end
  if (isbnArray.slice(0, -1).some(element => isNaN(Number(element)))) {
    return false;
  }

  // Check for non-numeric or non-'X' character at the end
  if (isNaN(Number(isbnArray[isbnArray.length - 1])) && isbnArray[isbnArray.length - 1] !== 'X') {
    return false;
  }

  // Convert all characters to numbers, 'X' is converted to 10
  let filteredArray = isbnArray.map((str, index) => {
    if (str === 'X' && index === isbnArray.length - 1) {
      return 10;
    } else {
      return Number(str);
    }
  });

  // Calculate the ISBN check digit
  const isValidISBN = filteredArray.reduce((acc, curr, index) => acc + curr * (10 - index), 0) % 11 === 0;

  return isValidISBN;
}