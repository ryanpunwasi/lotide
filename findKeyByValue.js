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

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  fantasy: "Game of Thrones",
  anime: "Dorohedoro",
  western: "Breaking Bad"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue({}, "The Wire"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "western");