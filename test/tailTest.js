const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([1, 2, 3, 4, 5]);
assertEqual(result.length, 4);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);
assertEqual(result[3], 5);

const resultTwo = tail([]);
assertEqual(resultTwo.length, 0);

const resultThree = tail(['🚩']);
assertEqual(resultThree.length, 0);

const resultFour = tail(['CA', 'US']);
assertEqual(resultFour.length, 1);
assertEqual(resultFour[0], 'US');