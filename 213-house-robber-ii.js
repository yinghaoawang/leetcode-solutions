/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 1 2 3 1
    // i can either rob first house or last house not both, so i can have 2 separate arrays
    // 1 2 3 and 2 3 1, then compare the maxes
    if (nums.length === 1) return nums[0];
    const dp1 = [nums[0]]; // 1
    const dp2 = [nums[1]]; // 2
    for (let i = 1; i < nums.length - 1; i++) {
        // dp1: [1,...]
        dp1[i] = Math.max(dp1[i-1], nums[i] + (dp1?.[i-2] || 0));
    }
    for (let i = 2; i < nums.length; i++) {
        // dp2: [2,...]
        dp2[i-1] = Math.max(dp2[i-2], nums[i] + (dp2?.[i-3] || 0));
    }
    return Math.max(dp1[dp1.length-1], dp2[dp2.length-1]);
};