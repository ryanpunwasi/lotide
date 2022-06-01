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
  sentence = sentence.split(" ").join('');
  for (let letter in sentence) {
    if(results[sentence[letter]] !== undefined) {
      results[sentence[letter]].push(letter);
    } else {
      results[sentence[letter]] = [letter];
    }
  }
  return results;
};

console.log(letterPositions('hi'));
const test = "hello";
assertArraysEqual(letterPositions(test)['h'], ['0']);