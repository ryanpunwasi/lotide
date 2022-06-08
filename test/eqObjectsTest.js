const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("eqObjects", () => {
  it("returns true for { b: '2', a: '1' }, { a: '1', b: '2' }", () => {
    const actual = eqObjects({ b: "2", a: "1" }, { a: "1", b: "2" });
    
    assert.equal(actual, true);
  });

  // it("returns [] for []", () => {
  //   assert.deepEqual(tail([]), []);
  // });

  // it("returns [] for [1]", () => {
  //   assert.deepEqual(tail([1]), []);
  // });

  // it("returns [2] for [1, 2]", () => {
  //   assert.deepEqual(tail([1, 2]), [2]);
  // });
});