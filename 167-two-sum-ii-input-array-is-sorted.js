/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 2 7 11 15
    // 17, 13 9

    let l = 0, r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] === target) return [l+1, r+1];
        else if (numbers[l] + numbers[r] < target) l++;
        else r--;
    }
    return -1;
};