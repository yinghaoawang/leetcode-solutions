/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // pretty easy to do with a map, but I must do it with constant space

    // marking approaching
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        // check if is dupe
        // if num is -1, checks if index 0 is negative 
        if (nums[Math.abs(num) - 1] < 0) return Math.abs(num);
        // mark if not a dupe
        nums[Math.abs(num) - 1] *= -1;
    }
    return -1;

    // oops, i'm not allowed to modify the array
    // everyone says to use 
};