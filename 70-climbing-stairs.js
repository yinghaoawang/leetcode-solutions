/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // brute force
  // let res = 0;
  // function traverse(stepNumber) {
  //     if (stepNumber === n) {
  //         res++;
  //         return;
  //     } else if (stepNumber > n) return;
  //     traverse(stepNumber + 1);
  //     traverse(stepNumber + 2);
  // }
  // traverse(0, 0);
  // return res;

  // i made a whole paint drawing to understand this problem
  let memo = {};
  memo[0] = 1;
  function traverse(i) {
      if (i >= n) return;
      memo[i+1] = memo[i+1] === undefined ? memo[i] : memo[i] + memo[i+1];
      memo[i+2] = memo[i+2] === undefined ? memo[i] : memo[i] + memo[i+2];
      traverse(i+1);
  }
  traverse(0);
  return memo[n];
};