const assertEqual = (actual, expected) => {
  let msg = actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(msg);
};

const eqObjects = (obj1, obj2) => {
  objOneKeys = obj1.keys();
  objTwoKeys = obj2.keys();

  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }

  return true;
};

assertEqual(eqObjects({}, {}), true);
assertEqual(eqObjects({ name: 'Cloud' }, {}), false);