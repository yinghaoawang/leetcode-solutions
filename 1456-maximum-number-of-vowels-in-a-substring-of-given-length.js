/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    function isVowel(c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }

    function calcVowels(sI, fI, a) {
        let count = 0;
        for (let i = sI; i <= fI; i++) {
            if (isVowel(a[i])) count++;
        }
        return count;
    }

    let sI = 0, fI = k - 1;
    let currCount = calcVowels(sI, fI, s);
    let maxCount = currCount;
    for (sI = 1, fI = k; fI < s.length; sI++, fI++) {
        currCount -= isVowel(s[sI-1]) ? 1 : 0;
        currCount += isVowel(s[fI]) ? 1 : 0;
        if (currCount > maxCount) maxCount = currCount;
    }
    return maxCount;
};