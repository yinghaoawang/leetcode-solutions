/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 1 2 3

    // 1xx, x1x, xx1
    
    // 12x, 1x2 -> 123, 132
    // 21x, x12 -> 213, 312
    // 2x1, x21 -> 231, 321

    // i guess this is backtracking

    const res = [];
    const set = new Set();
    function traverse(index, output) {
        if (set.size === nums.length) {
            res.push([...output]);
            return;
        }
        
        const val = nums[index];
        if (set.has(val)) return;

        set.add(val);
        for (let i = 0; i < nums.length; i++) {
            if (output[i] !== undefined) continue;
            output[i] = val;
            traverse(index + 1, output);
            output[i] = undefined;
        }
        set.delete(val);
    }
    traverse(0, Array(nums.length));
    return res;
};