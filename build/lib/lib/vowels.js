import { isString } from "./helpers";

export function vowels(str) {
  if (!isString(str)) {  // Notum isString fallið hér
    return null;
  }

  return str.match(/[aeiouáéíóúýæö]/gi) || [];
}
