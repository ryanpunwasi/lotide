const assertEqual = (actual, expected) => {
  let msg = actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(msg);
};

const findKey = (obj, cb) => {
  for (let property in obj) {
    if(cb(obj[property])) {
      return property;
    }
  }
  return undefined;
};