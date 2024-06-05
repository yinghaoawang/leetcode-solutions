/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 1 8 6 2 5 4 8 3 7

    // brute force
    // 1 1 ... 1 * 2
    // 1 0 1 ... 1 * 3
    // ...

    // 2 pointers
    // 1 ... 7
    // 8 ... 7
    // 8 ... 3
    // ...
    // 8 ... 8

    let maxLen = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        let lVal = height[l], rVal = height[r];
        let smaller = Math.min(lVal, rVal);
        let width = r - l;
        len = smaller * width;
        //console.log(l, lVal, r, rVal, len);
        if (len > maxLen) maxLen = len;
        if (lVal < rVal) {
            l++;
        } else {
            r--;
        }
    }
    return maxLen;
};