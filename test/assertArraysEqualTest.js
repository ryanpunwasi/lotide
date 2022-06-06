const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], []);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual(['a', 4], ['a', '4']);
assertArraysEqual([24], ['a', 24, 25]);