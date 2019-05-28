const VOWELS = ["a", "e", "i", "o", "u"];
const REPLACEMENT = "mummy";

const mummify = word => {
  if (isVowelLessThan30Percent(word)) {
    return word;
  }
  return replaceVowels(word);
};

const isVowel = letter => {
  return VOWELS.includes(letter.toLowerCase());
};

const isVowelLessThan30Percent = word => {
  let vowelCount = 0;

  for (let letter of word) {
    if (isVowel(letter)) {
      vowelCount++;
    }
  }
  return word.length === 0 || vowelCount / word.length < 0.3;
};

const replaceVowels = word => {
  let mummified = "";

  for (let letter of word) {
    if (!isVowel(letter)) {
      mummified += letter;
    } else if (!mummified.endsWith(REPLACEMENT)) {
      mummified += REPLACEMENT;
    }
  }
  return mummified;
};

module.exports = mummify;
