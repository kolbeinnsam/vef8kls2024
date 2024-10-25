import { isString } from "./helpers";

export function reverse(str) {
  if (!isString(str)) {  // Notum isString fallið hér
    return null;
  }

  return str.split('').reverse().join('');
}


