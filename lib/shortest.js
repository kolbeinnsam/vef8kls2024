export function shortest(str) {
  if (typeof str !== 'string') {
    return null;
  }

  const words = str.trim().split(/\s+/);

  return words.reduce((a, b) => (a.length < b.length ? a : b), words[0]);
}


