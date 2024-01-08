/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // bottom up approach
    // [0,1,0,3,2,3]

    // dp
    // [x,x,x,x,x,1]
    // [x,x,x,x,2,1]
    // [x,x,x,1,2,1]
    // [x,x,3,1,2,1]
    // [x,3,3,1,2,1]
    // [4,3,3,1,2,1]
    // in iteration, find largest dp value where the nums value is greater than curr value
    
    // start with [x,...,1]
    // let i = n - 2, i-- per round
    // let j = i + 1, j++ per iteration
    // find nums[j] such that nums[j] > nums[i] AND max(dp[j] + 1)

    let res = 1;
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
    }
    
    for (let i = nums.length - 2; i >= 0; i--) {
        let currMax = dp[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i] && dp[j] + 1 > currMax) {
                currMax = dp[j] + 1;
                if (currMax > res) res = currMax;
                dp[i] = currMax;
            }
        }
    }
    
    return res;
};