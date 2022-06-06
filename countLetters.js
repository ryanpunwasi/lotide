const assertEqual = (actual, expected) => {
  let msg = actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(msg);
};

const countLetters = (sentence) => {
  sentence = sentence.split(" ").join('');
  let count = {};
  for (let character of sentence) {
    if (count[character]) {
      count[character]++;
    } else {
      count[character] = 1;
    }
  }
  return count;
};

module.exports = countLetters;

// assertEqual(Object.keys(countLetters('')).length, 0);

// const test = 'lodash and lotide libraries';
// assertEqual(countLetters(test)['l'], 3);
// assertEqual(countLetters(test)['o'], 2);
// assertEqual(countLetters(test)['z'], undefined);
// assertEqual(countLetters(test)[' '], undefined);