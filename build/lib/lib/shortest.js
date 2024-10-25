import { isString } from "./helpers";

export function shortest(str) {
  if (!isString(str)) {  // Notum isString fallið hér
    return null;
  }

  const words = str.trim().split(/\s+/);

  return words.reduce((a, b) => (a.length < b.length ? a : b), words[0]);
}



