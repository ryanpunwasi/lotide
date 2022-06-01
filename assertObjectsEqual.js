const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const eqObjects = (obj1, obj2) => {
  let objOneKeys = Object.keys(obj1);
  let objTwoKeys = Object.keys(obj2);

  if (objOneKeys.length !== objTwoKeys.length) { // Checks if obj1 and obj2 have the same number of keys
    return false;
  }

  for (let key of objOneKeys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) { // In the case that obj1[key] and obj[2] are arrays, check to see if they are identical
        return false;
      }
    } else if (obj1[key] !== obj2[key]) { // Confirms if obj1 and obj2 have identical key-value pairs
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({}, {});
assertObjectsEqual({}, {});
assertObjectsEqual({ name: 'Cloud' }, {});
assertObjectsEqual({ team: "Toronto Raptors"}, { team: "Toronto Raptors" });
assertObjectsEqual({ team: 'Toronto Raptors'}, { team: "Miami Heat" });
assertObjectsEqual({ team: 'Toronto Raptors', player: 'Fred Vanvleet'}, { team: "Miami Heat" });
assertObjectsEqual({ diffKey: 'Toronto Raptors'}, { team: "Toronto Raptors" });
assertObjectsEqual({ east: 'TOR', west: 'GSW'}, { east: 'GSW', west: 'TOR' });

const cd3 = {c: [1, 2], d: [1, 2]};
const cd4 = {c: [1, 2], d: [1, 2]};
const cd5 = {c: [1], d: [1, 2]};
assertObjectsEqual(cd3, cd4);
assertObjectsEqual(cd4, cd5);