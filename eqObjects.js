const assertEqual = (actual, expected) => {
  let msg = actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(msg);
};

const eqObjects = (obj1, obj2) => {
  let objOneKeys = Object.keys(obj1);
  let objTwoKeys = Object.keys(obj2);

  if (objOneKeys.length !== objTwoKeys.length) { // Checks if obj1 and obj2 have the same number of keys
    return false;
  }

  for (let key of objOneKeys) {
    //if (!objTwoKeys.includes(key)) { // Checks if obj1 and obj2 have identical keys
     // return false;
    if (obj1[key] !== obj2[key]) { // Confirms if obj1 and obj2 have identical key-value pairs
      return false;
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects({}, {}), true);
assertEqual(eqObjects({ name: 'Cloud' }, {}), false);
assertEqual(eqObjects({ team: "Toronto Raptors"}, { team: "Toronto Raptors" }), true);
assertEqual(eqObjects({ team: 'Toronto Raptors'}, { team: "Miami Heat" }), false);
assertEqual(eqObjects({ team: 'Toronto Raptors', player: 'Fred Vanvleet'}, { team: "Miami Heat" }), false);
assertEqual(eqObjects({ diffKey: 'Toronto Raptors'}, { team: "Toronto Raptors" }), false);
assertEqual(eqObjects({ east: 'TOR', west: 'GSW'}, { east: 'GSW', west: 'TOR' }), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);