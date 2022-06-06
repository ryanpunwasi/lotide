const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(['r', 2, 'd', '2'], ['r', 2, 'd', 2]), false);