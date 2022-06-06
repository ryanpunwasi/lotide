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

const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, cb) => {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length > 5);
// const results3 = map(words, word => word.length);
// const results4 = map(words, word => word.toUpperCase());


// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, [true, true, false, false, false]);
// assertArraysEqual(results3, [6, 7, 2, 5, 3]);
// assertArraysEqual(results4, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);