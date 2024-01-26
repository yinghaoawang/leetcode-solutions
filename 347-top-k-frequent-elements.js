/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // could use heap O(N logN)
    // or could use map and iterate through map O(N logN)
    // use bucket sort O(N)
    // [0,1,2,...,n]
    // create map of count of numbers
    // create arr where index is count, and value is an array of numbers w/ that count
    // iterate from n to 0 find the first k values

    const countMap = {};
    for (const num of nums) {
        if (countMap[num] === undefined) countMap[num] = 0;
        countMap[num]++;
    }
    const buckets = Array(nums.length);
    for (const num in countMap) {
        const count = countMap[num];
        if (buckets[count] === undefined) buckets[count] = [];
        buckets[count].push(num);
    }
    const res = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i] === undefined) continue;
        while (k > 0 && buckets[i].length > 0) {
            const value = buckets[i].pop();
            res.push(value);
            k--;
        }
    }
    return res;
};