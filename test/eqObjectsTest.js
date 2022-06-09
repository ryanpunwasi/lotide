const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("eqObjects", () => {
  it("returns true for objects with the same key-value pairs", () => {
    const actual = eqObjects({ b: "2", a: "1" }, { a: "1", b: "2" });
    assert.deepEqual(actual, true);
  });

  it("returns true for two empty objects", () => {
    const actual = eqObjects({}, {});
    assert.deepEqual(actual, true);
  });

  it("returns false for two objects with different key-value pairs", () => {
    const actual = eqObjects({ team: "Toronto Raptors"}, { team: "Boston Celtics" });
    assert.deepEqual(actual, false);
  });

  it("returns true for two objects with the same key-value pairs, where some values are arrays", () => {
    const actual = eqObjects({ ecf: ["BOS", 'MIA']}, { ecf: ['BOS', 'MIA'] });
    assert.equal(actual, true);
  });

  it("returns false for two objects with different key-value pairs, where some values are arrays", () => {
    const actual = eqObjects({ ecf: ["BOS", 'MIA']}, { ecf: ['BOS', 'TOR'] });
    assert.equal(actual, false);
  });

  it("returns true for two objects with the same key-value pairs, where some values are nested arrays", () => {
    const actual = eqObjects({ teams: [['TOR']]}, { teams: [['TOR']] });
    assert.equal(actual, true);
  });

  it("returns false for two objects with different key-value pairs, where some values are nested arrays", () => {
    const actual = eqObjects({ teams: [['BOS']]}, { teams: [['TOR']] });
    assert.equal(actual, false);
  });

  it("returns false if two deeply nested objects have different key-value pairs", () => {
    const cd5 = {
      c: {
        d: { e : { f: 5 } }
      }
    };
    const actual = eqObjects(cd5, { c: { d: { e : { f: 4 } } } });
    assert.equal(actual, false);
  });

  it("returns true if two deeply nested objects have identical key-value pairs", () => {
    const cd5 = {
      c: {
        d: { e : { f: 4 } }
      }
    };
    const actual = eqObjects(cd5, { c: { d: { e : { f: 4 } } } });
    assert.equal(actual, true);
  });
});