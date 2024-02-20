/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 4567012 4 7 2, 4-7 are sorted, set 4 as the min
    // 012 0 1 2. whole array is sorted, set 0 as min
    let res;
    let l = 0, r = nums.length - 1;
    while (true) {
        const m = Math.trunc((l + r) / 2);
        // if entire array is sorted
        if (nums[l] <= nums[m] && nums[m] <= nums[r]) {
            updateRes(nums[l]);
            break;
        }
        // if only left is sorted
        else if (nums[l] <= nums[m]) {
            updateRes(nums[l]);
            l = m + 1;
        }
        // if only right is sorted
        else if (nums[r] >= nums[m]) {
            updateRes(nums[m]);
            r = m - 1;
        } else {
            console.error('error', l, m, r);
            return;
        }
    }
    return res;
    function updateRes(val) {
        if (res === undefined) {
            res = val;
            return;
        }
        if (val < res) res = val;
    }
};