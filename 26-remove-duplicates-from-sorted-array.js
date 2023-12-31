/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // i will keep track of every number that shows up in the array, if it exists, then i will delete it
    // const numSet = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     if (numSet.has(num)) {
    //         nums.splice(i, 1);
    //         i--;
    //     } else {
    //         numSet.add(num);
    //     }
    // }
    // return numSet.length;

    // since it is sorted, i can just check the previous number to improve memory cost
    // iterate through each index, and if the previous character is the same, then remove current character

    let prevNum = null;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (prevNum === num) {
            nums.splice(i, 1);
            i--;
        }
        prevNum = num;
    }
    return nums.length;
};