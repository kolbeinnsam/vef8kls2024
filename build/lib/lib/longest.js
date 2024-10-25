import { isString } from "./helpers";

export function longest(str) {
  if (!isString(str)) {  // Notum isString fallið hér
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


