const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], []);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual(['a', 4], ['a', '4']);
assertArraysEqual([24], ['a', 24, 25]);
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([], []);
assertArraysEqual([1], [1, 2, 3])
assertArraysEqual([1, 2, [3, [4, [[[[6]]]]]], 4], [1, 2, [3, [4, [[[[6]]]]]], 4]);