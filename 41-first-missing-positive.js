/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i + 1 && (nums[i] >= 1 && nums[i] <= nums.length)) {
            if (nums[nums[i] - 1] === nums[i]) break;
            swap(nums, nums[i] - 1, i);
        }
    }
    function swap(arr, i1, i2) {
        let tmp = arr[i2];
        arr[i2] = arr[i1];
        arr[i1] = tmp;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) return i + 1;
    }
    return nums.length + 1;
};