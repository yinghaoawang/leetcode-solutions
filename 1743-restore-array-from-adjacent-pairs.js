// TERRIBLE SOLUTION, oh well still O(N)

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
  // put pairs into magic map
  const map = {};
  for (const pair of adjacentPairs) { // N
      const first = pair[0];
      const second = pair[1];
      if (first in map) {
          map[first].push(second);
      } else {
          map[first] = [second];
      }
      
      if (second in map) {
          map[second].push(first);
      } else {
          map[second] = [first];
      }
  }

  // put first 2 elements in result set
  const res = [];
  const newMap = {};

  for (key in map) { // N
      const value = map[key];
      if (value.length === 1) {
          res.push(Number(key));
          res.push(value[0]);
          newMap[key] = true;
          newMap[value[0]] = true;
          break;
      }
  }

  // traverse until find the end
  let currEl = res[res.length - 1];
  while (true) { // N
      const currPair = map[currEl];
      const uniqueEl = currPair.find(el => newMap[el] == null); // 1
      newMap[uniqueEl] = true;
      if (uniqueEl == null) break;
      res.push(uniqueEl);
      currEl = uniqueEl;
  }

  return res;
};

// example 1
// 2 -> 1
// 1 -> 2
// 3 -> 4
// 4 -> 3
// 3 -> 2,4
// 2 -> 1,3

// 2 -> 1,3
// 1 -> 2
// 3 -> 2,4
// 4 -> 3

// [1,2]



// example 2
// 4 -> -2,N
// -2 -> N,4
// 1 -> N,4
// 4 -> -2,1 MOD
// -3 -> N,1
// 1 -> -3,4 MOD


// -2 -> N,4
// 4 -> -2,1 MOD
// -3 -> N,1
// 1 -> -3,4 MOD

// [-2, 4, 1, -3]



// example 3
// 1000 > N, -1000
// -1000 > N, 1000

// [1000, -1000]

// -3,1, -2,4 1,4