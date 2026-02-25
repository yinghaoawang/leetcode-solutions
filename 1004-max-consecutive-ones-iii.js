/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let currCount = 0;
    let maxCount = 0;
    let zeroCount = 0;
    let sI = 0, fI = 0;
    for (; fI < nums.length; fI++) {
        if (nums[fI] != 1) zeroCount++;
        currCount++;
        while (zeroCount > k) {
            if (nums[sI] != 1) {
                zeroCount--;
            }
            currCount--;
            sI++;
        }
        if (currCount > maxCount) maxCount = currCount;
    }
    return maxCount;
};