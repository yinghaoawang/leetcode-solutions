/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let startIndex = 0, endIndex = 0, currCount = 0, maxCount = 0, zeroCount = 0;
    for (; endIndex < nums.length; endIndex++) {
        const num = nums[endIndex];
        if (nums[endIndex] === 0) zeroCount++;
        currCount++;
        if (zeroCount > 1) {
            if (nums[startIndex] === 0) zeroCount--; 
            currCount--;
            startIndex++;
        }
        if (currCount > maxCount) maxCount = currCount;
    }
    return maxCount - 1;
};