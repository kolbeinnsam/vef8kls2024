export function consonants(str) {
  if (typeof str !== 'string') {
    return null;
  }

  return str.match(/[^aeiouáéíóúýæö\s]/gi) || [];
}

