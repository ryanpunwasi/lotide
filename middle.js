const middle = (arr) => {
  const middleIndex = arr.length % 2 === 0 ? (arr.length / 2) - 1 : Math.floor(arr.length / 2);
  let middle = [];

  if (arr.length <= 2) {
    return middle;
  }

  if (arr.length % 2 === 0) {
    middle = arr.slice(middleIndex, middleIndex + 2);
    return middle;
  }
  
  middle.push(arr[middleIndex]);

  return middle;
};

module.exports = middle;