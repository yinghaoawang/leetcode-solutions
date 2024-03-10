/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const set = new Set();
    for (const num of nums1) {
        set.add(num);
    }
    for (const num of nums2) {
        if (set.has(num)) return num;
    }
    return -1;
};