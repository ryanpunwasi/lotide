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

const takeUntil = function(array, callback) {
  const taken = [];

  for (const ele of array) {
    if (!callback(ele)) {
      taken.push(ele);
    } else {
      return taken;
    }
  }

  return taken;
};

module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// const results3 = takeUntil(data2, x => x === 'Not in array');

// const results4 = takeUntil(data1, x => x === 1);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
// assertArraysEqual(results3, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
// assertArraysEqual(results4, []);