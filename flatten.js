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

const flatten = (arr) => {
  let flattened = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      ele.forEach(e => {
        flattened.push(e);
      });
    } else {
      flattened.push(ele);
    }
  }

  return flattened;
};

module.exports = flatten;
// assertArraysEqual(flatten([[1, 2], 3, [4], []]), [1, 2, 3, 4]);
// assertArraysEqual(flatten(['a', 'b', 'c']), ['a', 'b', 'c']);
// assertArraysEqual(flatten([]), []);
// assertArraysEqual(flatten([1, [2, 4], 'Tom Brady']), [1, 2, 4, 'Tom Brady']);
// assertArraysEqual(flatten([['Jon Snow'], ['Arthur Dayne'], ['Jaime Lannister']]), ['Jon Snow', 'Arthur Dayne', 'Jaime Lannister']);