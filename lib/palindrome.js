import { isString } from "./helpers";

export function isPalindrome(str) {
  if (!isString(str)) {  // Notum isString fallið hér
    return null;
  }

  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}


