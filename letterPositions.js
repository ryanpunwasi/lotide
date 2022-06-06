const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const assertArraysEqual = (arr1, arr2) => {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: Arrays are equal.`);
  } else {
    console.log(`❌ Assertion Failed: Arrays are not equal.`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let letter in sentence) {
    letter = Number(letter); // Typecast letter, which is a string of a numerical index, to a Number
    if (sentence[letter] !== ' ') { // skips spaces
      if (results[sentence[letter]] !== undefined) {
        results[sentence[letter]].push(letter);
      } else {
        results[sentence[letter]] = [letter];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// const test = "hello";
// assertArraysEqual(letterPositions(test)['h'], [0]);
// assertArraysEqual(letterPositions(test)['e'], [1]);
// assertArraysEqual(letterPositions(test)['l'], [2, 3]);
// assertArraysEqual(letterPositions(test)['o'], [4]);