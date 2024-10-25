import { isString } from "./helpers";

export function consonants(str) {
  if (!isString(str)) { 
    return null;
  }

  return str.match(/[^aeiouáéíóúýæö\s]/gi) || [];
}


