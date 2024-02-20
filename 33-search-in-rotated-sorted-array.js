/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // binary search
    // 4567012 4 7 2 left is sorted, is num between l and m? no, search unsorted (m + 1)
    // 012 0 1 2 whole array is sorted, is num between l and m OR is num between m and r? between l and m, search l and m - 1
    // 0 1 1 whole array is sorted, is num between l and m OR is num between m and r? between l and m, serach l and m - 1
    // 0 0 0 whole array is sorted. nums[0] is target, return m

    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = Math.trunc((l + r) / 2);
        // console.log(l,r,m);
        if (nums[m] === target) return m;

        // whole array is sorted
        if (nums[l] <= nums[m] && nums[m] <= nums[r]) {
            // is target between l and m?
            if (target >= nums[l] && target <= nums[m]) {
                r = m - 1;
            }
            // is target between m and r?
             else if (target >= nums[m] && target <= nums[r]) {
                l = m + 1;
            }
             // target does not exist
            else {
                return -1;
            }
        }
        // only left array is sorted
        else if (nums[l] <= nums[m]) {
            // is target between this sorted array?
            if (target >= nums[l] && target <= nums[m]) {
                r = m - 1;
            }
            // otherwise search unsorted array
            else {
                l = m + 1;
            }
        }
        // only right array is sorted
        else if (nums[m] <= nums[r]) {
            // is target between this sorted array?
            if (target >= nums[m] && target <= nums[r]) {
                l = m + 1;
            }
            // otherwise search unsorted array
            else {
                r = m - 1;
            }
        }
    }
    return -1;
};