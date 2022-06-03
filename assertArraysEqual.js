const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const inspect = require('util').inspect;
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(arr1)} !== [${inspect(arr2)}`);
  }
};

assertArraysEqual([], []);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual(['a', 4], ['a', '4']);
assertArraysEqual([24], ['a', 24, 25]);