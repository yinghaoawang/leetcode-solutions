/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // brute force solution O(N*M)
  // iterate through all the cookie sizes, find the smallest diff greed from the children, and if it's <= 0, then remove the value from g
  // this assumes are allowed to mutate the greed array
  // let res = 0;
  // for (let i = 0; i < s.length; i++) {
  //     let minDiff;
  //     let minDiffIndex = -1;
  //     for (let j = 0; j < g.length; j++) {
  //         const currDiff = g[j] - s[i];
  //         if (currDiff > 0) continue;

  //         const absDiff = Math.abs(currDiff);
  //         if (minDiff === undefined || absDiff < minDiff) {
  //             minDiff = absDiff;
  //             minDiffIndex = j;
  //         }
  //     }
  //     if (minDiffIndex > -1) {
  //         g.splice(minDiffIndex, 1);
  //         res++
  //     }
  // }
  // return res;

  // sorting solution O(NlogN + MlogM)
  // sort both arrays in ascending order
  // have two pointers iterating for size and greed
  // we get the greed and size value for the corresponding index, and if size is >= greed
      // then a child with minimum greed can eat a cookie with minimum size, increment both pointers
  // if a size is < greed then the current child will not eat the cookie, so we increment the cookie pointer
  
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gP = 0, sP = 0, res = 0;
  while (gP < g.length && sP < s.length) {
      const greed = g[gP];
      const size = s[sP];
      if (size >= greed) {
          res++;
          sP++;
          gP++;
      } else {
          sP++;
      }
  }
  return res;
};