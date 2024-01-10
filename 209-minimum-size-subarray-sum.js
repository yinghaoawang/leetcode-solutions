/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 2,3,1,2,4,3  t=7
    // 2 = 2
    // 2,3 = 5
    // 2,3,1 = 6
    // 2,3,1,2 = 8  n=4
    // 3,1,2 = 6
    // 3,1,2,4 = 10 n=4
    // 1,2,4 = 7    n=3
    // 2,4 = 6
    // 2,4,3 = 9    n=3
    // 4,3 = 7      n=2

    // use 2 pointers to indicate a window of sum
    // if the sum is < target, then we increment the right pointer, increasing the window by 1 index
    // if the sum is >= target, then we increment the left pointer, decreasing the window size from the left by 1
    // O(N)

    let minCount = Number.MAX_SAFE_INTEGER;
    let l = 0, r = 0;
    let sum = nums[0];
    if (sum >= target) {
        minCount = 1;
    }

    while (r < nums.length) {
        if (sum < target) {
            r++;
            sum += nums[r];
        } else {
            sum -= nums[l];
            l++;
        }
        
        if (sum >= target) {
            if (r - l + 1 < minCount)
            minCount = r - l + 1;
        }
    }

    return minCount === Number.MAX_SAFE_INTEGER ? 0 : minCount;
};
