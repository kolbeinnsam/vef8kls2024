export function longest(str) {
  if (typeof str !== 'string') {
    return null;
  }

  const words = str.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

