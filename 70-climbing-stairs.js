/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // for n = 4? (4)
    // can do
    // 1 1 1 1
    // 1 1 2
    // 1 2 1
    // 2 1 1
    // 2 2
    
    // [1,2,3,4]

    // [1,2,x,x]
    // [1,2,2+1,x]
    // [1,2,3,3+2]


    let memo = {};
    memo[1] = 1;
    memo[2] = 2;
    function traverse(stepNumber) {
        if (stepNumber > n) return;
        // the ways to get to the current number is sum of
            // 1. the ways to get to 1 step before it, and
            // 2. the ways to get the 2 steps before it
        // this is because the only way to get to the current step number is from those 2 steps before
        // and the number of ways to get to those steps before is stored in memo
        memo[stepNumber] = memo[stepNumber - 1] + memo[stepNumber - 2];
        traverse(stepNumber + 1);
    }
    traverse(3);
    return memo[n];
};