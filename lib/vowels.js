export function vowels(str) {
  if (typeof str !== 'string') {
    return null;
  }

  return str.match(/[aeiouáéíóúýæö]/gi) || [];
}

