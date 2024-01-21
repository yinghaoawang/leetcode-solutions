/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // // incorrect solution, get every alternate
    // let first = 0
    // let second = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (i % 2 === 0) {
    //         first += nums[i];
    //     } else {
    //         second += nums[i];
    //     }
    // }
    // return Math.max(first, second);

    // dp solution
    // nums: 2 1 1 2
    //   dp: 2
    //       2 2
    //       2 2 3
    //       2 2 3 4

    const memo = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const takeVal = num + (memo?.[i - 2] || 0);
        memo[i] = Math.max(memo[i-1], takeVal);
    }
    return memo[nums.length - 1];
};