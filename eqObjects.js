const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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
    } else if (!Array.isArray(obj1[key]) && !Array.isArray(obj2[key]) && typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) { // Confirms if obj1 and obj2 have identical key-value pairs
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;


// TEST CASES
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
const cd3 = {c: [1, 2], d: [1, 2]};
const cd4 = {c: [1, 2], d: [1, 2]};
const cd5 = {
  c: { 
    d: { e : { f: 4 } }
  }
};
assertEqual(eqObjects(cd3, cd4), true);
assertEqual(eqObjects(cd4, cd5), false);
assertEqual(eqObjects(cd5, {
  c: { 
    d: { e : { f: 4 } }
  }
}), true);

assertEqual(eqObjects(cd5, {
  c: { 
    d: { e : { f: 5 } }
  }
}), false);