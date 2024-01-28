/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //abcabcbb
    //a
    //ab
    //abc
    // bca
    //  cab
    //   abc
    //     cb
    //       b
    // SLIDING WINDOW

    const set = new Set();
    let count = 0, maxCount = 0;
    let left = 0, right = 0;

    while (right < s.length) {
        const val = s[right];
        count++;
        while (set.has(val)) {
            if (left >= right) break;
            const leftVal = s[left];
            set.delete(leftVal);
            count--;
            left++;
        }
        set.add(val);
        right++;
        if (count > maxCount) maxCount = count;
 }
    return maxCount;
};