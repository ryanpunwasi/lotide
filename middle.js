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

const middle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  let middle = [];
  if (arr.length <= 2) {
    return middle;
  }
  return middle;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);