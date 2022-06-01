const assertEqual = (actual, expected) => {
  let msg = actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(msg);
};

const countLetters = (sentence) => {
  let count = {};
  for(let character of sentence) {
  }
  return count;
};

countLetters('Hello there');