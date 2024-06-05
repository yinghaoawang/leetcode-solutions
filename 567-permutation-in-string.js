/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // disclaimer: bottom 5% of all performance and memory :()

    // s1: a=1, b=1

    // eidbaooo
    // e not in s1: r++, l=r
    // i not in s1: r++, l=r
    // d not in s1: r++, l=4
    // b in s1 GOOD: increment b in map2, map2[b] <= map1[b] GOOD, r-l < s1.length: r++
    // a in s1 GOOD: increment a in map2, map2[a] <= map1[a] GOOD: r-l == s1.length: return true

    // s1 is the smaller one EDIT: WRONG

    // if (s1.length > s2.length) {
    //     let tmp = s2;
    //     s2 = s1;
    //     s1 = tmp;
    // }
    // ABOVE IS WRONG

    let s1Map = {}, s2Map = {};
    for (let char of s1) {
        s1Map[char] = s1Map[char] + 1 || 1;
    }
    // for (let char of s2) {
    //     s2Map[char] = s2Map[char] + 1 || 1;
    // }

    let l = 0, r = 0;
    while (r < s2.length) {
        let char = s2[r];
        s2Map[char] = s2Map[char] + 1 || 1;
        let len = r-l+1;
        // console.log(l, r, len);


        if (s1Map[char] == null || s1Map[char] < s2Map[char] || len > s1.length) {
            s2Map = {};
            l++;
            r=l;
            continue;
        }

        if (len == s1.length) return true;
        r++;
    }

    return false;
};