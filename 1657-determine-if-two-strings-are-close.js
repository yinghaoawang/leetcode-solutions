/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // abcde -> aecdb
    // can use operation 1 as many times if all chars are the same amount
    
    // a -> aa
    // if lengths diff, then false

    // cabbba -> abbccc
    // c1 a2 b3 -> a1 b2 c3
    // can use operation 2 if 2 different chars have the same values

    // can sort by value
    // iterate through both char maps
    // true if they all have the have the same values

    if (word1.length != word2.length) return false;
    const chars1 = [], chars2 = [];
    for (let i = 0; i < 26; i++) {
        chars1[i] = 0;
        chars2[i] = 0;
    }
    for (let i = 0; i < word1.length; i++) {
        const charCode1 = word1.charCodeAt(i) - 'a'.charCodeAt(0);
        const charCode2 = word2.charCodeAt(i) - 'a'.charCodeAt(0);
        chars1[charCode1]++;
        chars2[charCode2]++;
    }
    for (let i = 0; i < 26; i++) {
        if (chars1[i] > 0 && chars2[i] === 0 || chars2[i] > 0 && chars1[i] === 0) return false;
    }
    chars1.sort();
    chars2.sort();
    for (let i = 0; i < 26; i++) {
        if (chars1[i] != chars2[i]) return false;
    }
    return true;
};