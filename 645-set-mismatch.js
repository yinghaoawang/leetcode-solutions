/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set = new Set();
    let repeatedNum, missingNum;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (set.has(num)) repeatedNum = num;
        set.add(num);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) missingNum = i;
    }
    return [repeatedNum, missingNum];
};