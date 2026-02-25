/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const hm1 = {}, hm2 = {};
    const bucket1 = [], bucket2 = [];
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (!hm1[num]) {
            bucket1.push(num)
            hm1[num] = true;
        }
        
    }
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if (!hm2[num]) {
            bucket2.push(num)
            hm2[num] = true;
        }
    }
    
    const diff1 = [], diff2 = [];
    for (let i = 0; i < bucket1.length; i++) {
        const num = bucket1[i];
        if (!hm2[num]) diff1.push(num);
    }
    for (let i = 0; i < bucket2.length; i++) {
        const num = bucket2[i];
        if (!hm1[num]) diff2.push(num);
    }

    return [diff1, diff2];
};