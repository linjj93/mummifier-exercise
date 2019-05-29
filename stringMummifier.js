const VOWELS = ["a", "e", "i", "o", "u"];
const REPLACEMENT = "mummy";

//return same word if vowel is less than 30%
// otherwuse replaceVowels???
const mummify = word => {
  if (typeof word !== "string") throw new TypeError("Please input string");
  if (isVowelLessThan30Percent(word)) {
    return word;
  }
  return replaceVowels(word);
};

//check if letter is vowel return boolean
const isVowel = letter => {
  return VOWELS.includes(letter.toLowerCase());
};

//return true if word is empty str
//return true if no of vowel in word is < 30%
const isVowelLessThan30Percent = word => {
  let vowelCount = 0;

  for (let letter of word) {
    if (isVowel(letter)) {
      vowelCount++;
    }
  }
  return word.length === 0 || vowelCount / word.length < 0.3;
};

//
const replaceVowels = word => {
  let mummified = "";

  for (let letter of word) {
    //if not vowel concat to str
    if (!isVowel(letter)) {
      mummified += letter;
      //str does not end with 'mummy' => concat 'mummy' to str
    } else if (!mummified.endsWith(REPLACEMENT)) {
      mummified += REPLACEMENT;
    }
  }
  return mummified;
};

module.exports = mummify;
