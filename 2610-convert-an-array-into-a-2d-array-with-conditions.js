/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    // brute forcd, iterate through nums until it's empty
    // create an array currRowArr for each row
    // if currRowArr does not contain the value, then add it to the arr and remove value from array
    // if it does contain the value, then continue to next value
    // at end of iteration, add currRowArr to res

    // map optimization
    const res = [];

    while (nums.length > 0) {
        const currRowArr = [];
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (map[num] != null) continue;
            map[num] = 1;
            currRowArr.push(num);
            nums.splice(i, 1);
            i--;
        }
        res.push(currRowArr);
    }

    return res;
};