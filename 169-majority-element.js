/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // find the element appear X+ amount of times
    //   - can use a map, space O(N), time O(N)
    //   - can sort nums, then count consecutive values, time O(NlogN)

    // find the most common element (because the majority element is guaranteed to exist)
    //  - voting algorithm. time O(N), space O(1)

    // arr:   3 2 3
    // count: 1 1 1
    // el:    3 2 3

    // arr:   2 2 3 3 3 2 2
    // count: 1 2 1 1 2 1 2
    // el:    2 2 2 3 3 2 2

    let count = 0, element = nums[0];
    for (const num of nums) {
        if (num === element) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            element = num;
            count++;
        }
    }
    return element;
};