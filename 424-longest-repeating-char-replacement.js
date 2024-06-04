/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    /*
        let g = len(window) - len(count of most common char in window);

        aababba
                    k-g
        |a|ababba   2
        |aa|babba   2
        |aab|abba   1
        |aaba|bba   1
        |aabab|ba   0
        
        |aababb|a   -1
        a|ababb|a   -1
        aa|babb|a   -1
        aab|abb|a   0

        aab|abba|   0
        aaba|bba|   1
        aabab|ba|   1
        aababb|a|   2
    */

    let l = 0, r = 0;
    let length = 0, maxLen = 0;
    let map = {};

    const getMaxMapVal = () => {
        let max;
        for (const key in map) {
            const val = map[key];
            if (max == null) {
                max = val;
                continue;
            }
            if (val > max) max = val; 
        }
        return max || 0;
    }

    const getWindowStr = () => {
        let left = l;
        let str = '';
        while (left <= r) {
            str += s[left++];
        }
        return str;
    }
    if (s.length > 0) {
        map[s[0]] = 1;
        maxLen = 1;
    }

    while (l < s.length - 1) {
        let windowLen = r - l + 1;
        let leftoverChars = windowLen - getMaxMapVal();
        // console.log(getWindowStr(), windowLen, leftoverChars);
        if (leftoverChars <= k) {
            if (windowLen > maxLen) maxLen = windowLen;
            if (r < s.length - 1) {
                r++
                map[s[r]] = map[s[r]] + 1 || 1;
            } else {
                map[s[l]]--;
                l++;
            }
        } else {
            map[s[l]]--;
            l++;
        }
    }


    return maxLen;
};