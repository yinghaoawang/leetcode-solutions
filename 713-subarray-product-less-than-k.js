/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // sliding window
    // 10 5 2 6  k=250
    // 10 [10] add 10 to nothing
    // 10 5 [10,5] [5] add 5 to 10, and nothing
    // 10 5 2 [10,5,2] [5,2] [2] add 2 to 10, 5, and nothing
    // therefore, res += r-1+1
    let l = 0, r = 0, prod = 1, res = 0;
    while (r < nums.length) {
        prod *= nums[r];

        while (prod >= k && l < r) {
            prod /= nums[l];
            l++;
        }
        if (prod < k) {
            res += r - l + 1;
        }
        r++;
    }
    return res;
};