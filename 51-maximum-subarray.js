/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp
    // [-2,1,-3,4,-1,2,1,-5,4]

    // [-2] c=-2 v=-2 m=-2
    // [-2,1] c=1 v=-1 m=1
    // [-2,1,-2] c=-3 v=-2 m=1
    // [-2,1,-2,4] c=4 v=2 m=4
    // [-2,1,-2,4,3] c=-1 v=3 m=4
    // [-2,1,-2,4,3,5] c=2 v=5 m=5
    // [-2,1,-2,4,3,5,6] c=1 v=6 m=6
    // [-2,1,-2,4,3,5,6,1] c=-5 v=1 m=6
    // [-2,1,-2,4,3,5,6,1,5] c=4 v=5 m=6

    const dp = [];
    dp[0] = nums[0];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
        if (dp[i] > max) max = dp[i];
    }
    return max;
};