/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // -1, 0, 1, 2, -1, -4
    // get all triplets where indices are not same
    // -1 0 1, -1 0 2, -1 0 -1
    // -1 1 2, -1 1 -1, -1 1 -4
    // -1 2 -1, -1 2 -4
    
    // 3 way for loop?
    // O(N^3)?

    // i can sort the array
    // then iterate through each element, then do it like 2sum
    // sorting prevents repeats
    const res = [];
    nums.sort((a,b) => a-b);
    // console.log(nums);
    let prev;
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        if (first === prev) continue; // prevent repeats
        // now do 2sum
        let l = i + 1, r = nums.length - 1;
        let prevSecond, prevThird;
        while (l < r) {
            const second = nums[l], third = nums[r];
            if (second === prevSecond) {
                l++;
                continue;
            }
            if (third === prevThird) {
                r--;
                continue;
            }
            const sum = first + second + third;
            if (sum === 0) {
                res.push([first, second, third]);
                r--;
                l++;
                prevSecond = second;
                prevThird = third;
            } else if (sum > 0) {
                r--;
                prevThird = third;
            } else if (sum < 0) {
                l++;
                prevSecond = second;
            } else {
                throw new Error('Invalid sum', sum);
            }
        }
        prev = first;
    }
    return res;
    
};