export function isPalindrome(str) {
  if (typeof str !== 'string') {
    return null;
  }

  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

