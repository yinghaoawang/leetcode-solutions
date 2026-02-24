/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    function calcSum(sI, fI, a) {
        let sum = 0;
        for (let i = sI; i <= fI; i++) {
            sum += nums[i];
        }
        return sum;
    }

    let sI = 0, fI = k-1;
    let currSum = calcSum(sI, fI, nums);
    let maxSum = currSum;
    for (sI = 1, fI = k; fI < nums.length; sI++, fI++) {
        currSum = currSum - nums[sI - 1] + nums[fI];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum / k;
};