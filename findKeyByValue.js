const assertEqual = (actual, expected) => {
  let msg = actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(msg);
};

const findKeyByValue = (obj, value) => {
  for (let property in obj) {
    if (obj[property] === value) {
      return property;
    }
  }

  return undefined;
};

console.log(findKeyByValue({1: 2, 3: 4}, 4));