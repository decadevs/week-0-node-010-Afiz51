/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let maxPair = 0;
  let singlePair = [];
  cleanPile = cleanPile.sort((a, b) => {
    return a - b;
  });
  dirtyPile = dirtyPile.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < cleanPile.length; i++) {
    if (cleanPile[i] === cleanPile[i + 1]) {
      console.log("cleanPile: ", cleanPile);
      maxPair++;
      cleanPile.splice(i, 1);
      console.log("cleanPile: ", cleanPile);
    } else {
      singlePair.push(cleanPile[i]);
      console.log("singlePair: ", singlePair);
      console.log("cleanPile: ", cleanPile);
    }
  }
  for (let j = 0; j < singlePair.length; j++) {
    if (dirtyPile.includes(singlePair[j]) && noOfWashes > 0) {
      dirtyPile.splice(j, 1);
      console.log("dirtyPile: ", dirtyPile);
      maxPair++;
      noOfWashes--;
    }
  }
  for (let i = 0; i < dirtyPile.length; i++) {
    if (dirtyPile[i] === dirtyPile[i + 1] && noOfWashes > 1) {
      maxPair++;
      noOfWashes -= 2;
      dirtyPile.splice(i, 1);
    }
  }
  return maxPair;
}



module.exports = getMaxPairs;
