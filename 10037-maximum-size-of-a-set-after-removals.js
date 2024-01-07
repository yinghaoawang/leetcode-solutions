// Submitted for Weekly Contest 379

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var maximumSetSize = function(nums1, nums2) {
    const n = nums1.length;
    const map1 = {};
    const map2 = {};
    const mapUnion = {};
    for (let i = 0; i < nums1.length; i++) {
        let num1 = nums1[i];
        let num2 = nums2[i];
        map1[num1] = true;
        map2[num2] = true;
        mapUnion[num1] = true;
        mapUnion[num2] = true;
    }
    const in1 = {};
    const in2 = {};
    const inBoth = {}; // intersection
    for (let num in mapUnion) {
        if (map1[num] && map2[num]) {
            inBoth[num] = true;
        }
        else if (map1[num]) in1[num] = true;
        else in2[num] = true;
    }
    let res = 0;
    let i = 0;
    for (let key in in1) {
        if (i >= n / 2) {
            break;
        }
        res++;
        i++;
    }
    for (key in inBoth) {
        if (i >= n / 2) break;
        delete inBoth[key];
        res++;
        i++;
    }
    
    let j = 0;
    for (let key in in2) {
        if (j >= n / 2) break;
        res++;
        j++;
        
    }
    for (key in inBoth) {
        if (j >= n / 2) break;
        delete inBoth[key];
        res++;
        j++;
    }
    
    return res;
};