/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

/**
 *
 * @param {Element} el
 */
function removeHidden(el) {
  el.classList.remove('hidden');
}

function analyzeText(inputString) {
  // Strengjagreining
  const longestWord = longest(inputString);
  const shortestWord = shortest(inputString);
  const vowelCount = vowels(inputString);
  const consonantCount = consonants(inputString);
  const isPalindromeText = isPalindrome(inputString) ? '' : 'ekki';
  const reversedString = reverse(inputString);

  // Finna elements og uppfæra niðurstöður
  document.querySelector('.input').textContent = inputString;
  document.querySelector('.longest').textContent = longestWord;
  document.querySelector('.shortest').textContent = shortestWord;
  document.querySelector('.vowels').textContent = vowelCount;
  document.querySelector('.consonants').textContent = consonantCount;
  document.querySelector('.palindrome').textContent = isPalindromeText;
  document.querySelector('.reversed').textContent = reversedString;

  // Gera outputið sýnilegt
  const outputElement = document.querySelector('.output');
  removeHidden(outputElement);
}

// Submita handler
function submitHandler(event) {
  event.preventDefault();
  const textareaElement = event.target.querySelector('textarea');
  const inputString = textareaElement.value.trim();
  analyzeText(inputString);
}

// Greina texta í rauntíma irtt
function inputHandler(event) {
  const inputString = event.target.value.trim();
  analyzeText(inputString);
}

// Event listener fyrir form submission
const formElement = document.querySelector('form');
formElement.addEventListener('submit', submitHandler);

// Event listener fyrir rauntíma
const textareaElement = document.querySelector('textarea');
textareaElement.addEventListener('input', inputHandler);

// Imports fyrir hjálparföll
import { isString, splitOnWhitespace } from './lib/helpers.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';
import { isPalindrome } from './lib/palindrome.js';

// Prófanir
const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

const sentence = 'Halló heimur þetta er frábær dagur';
console.log('Lengsta orðið:', longest(sentence));
console.log('Stysta orðið:', shortest(sentence));
console.log('Setning öfug:', reverse(sentence));
console.log('Sérhljóðar:', vowels(sentence));
console.log('Samhljóðar:', consonants(sentence));
console.log('Er "madam" palindrome?', isPalindrome('madam'));
console.log('Er "hello" palindrome?', isPalindrome('hello'));
