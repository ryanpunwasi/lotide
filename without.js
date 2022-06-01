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

const without = (source, itemsToRemove) => {
  let filteredArray = [];
  source.forEach(element => {
    if (!itemsToRemove.includes(element)) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
};

assertArraysEqual(without([1, 2, 3, 5], [5, 2]), [1, 3]);
assertArraysEqual(without([1], []), [1]);
assertArraysEqual(without([], [2000]), []);
assertArraysEqual(without(['Lebron', 'Magic', 'Kareem', 'Magic'], ['Magic']), ['Lebron', 'Kareem']);
assertArraysEqual(without(['Frodo', 'Gandalf', 'Sam', 'Frodo', 'Sauron'], ['Gandalf', 'Sauron']), ['Frodo', 'Sam', 'Frodo']);

const original = [1, 2, 3];
without(original, [3]);
assertArraysEqual(original, [1, 2, 3]);