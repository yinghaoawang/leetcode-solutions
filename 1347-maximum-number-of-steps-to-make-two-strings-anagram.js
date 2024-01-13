/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // bab aba
    // an anagram is same num of characters, but order does not matter
    // map of s and t to check how many letters s and t have respectively

    // bab aba -> a1b2 a2b1 
    // leetcode practice -> l1 e3 t1 c1 o1 d1 | p1 r1 a1 c2 t1 i1 e1

    // can only change T
    // see how many letters s has that t doesnt,
    // the extra letters that t has doesnt matter because we just replace them

    // bab aba 1
    // leetcode practice 1 2 1 1

    // let sMap = {}, tMap = {};
    // for (let i = 0; i < s.length; i++) {
    //     const sChar = s[i], tChar = t[i];
    //     if (sMap[sChar] == null) sMap[sChar] = 1;
    //     else sMap[sChar]++;

    //     if (tMap[tChar] == null) tMap[tChar] = 1;
    //     else tMap[tChar]++;
    // }
    
    // let res = 0;
    // for (let sChar in sMap) {
    //     const diff = Math.max(sMap[sChar] - (tMap[sChar] || 0), 0);
    //     console.log(sChar, diff);
    //     res += diff;
    // }
    // return res;

    // counting strategy
    // create a map for each letter of the alphabet
    // when iterating through s, increment the letter by 1
    // when iterating through t, decrement the letter by 2
    // at the end, sum of the positive values in the map

    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i], tChar = t[i];
        charCount[sChar] = charCount[sChar] != null ? charCount[sChar] + 1 : 1;
        charCount[tChar] = charCount[tChar] != null ? charCount[tChar] - 1 : -1;
    }

    let res = 0;
    for (let char in charCount) {
        if (charCount[char] > 0) res += charCount[char];
    }
    return res;
};