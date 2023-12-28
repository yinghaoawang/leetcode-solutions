/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // longest common prefix
    // in the second example, it makes it clear that i start looking from the left of the string for all the strings
    // we make sure all the strings have the same character at the current index, when it finds a character that isn't
    // matching, then we return the result, which is the substring from 0 to the current index

    // O(N*M), N = strings count, M = string length
    
    // flower, flow, flight
    // 0: f,f,f
    // 1, l,l,l
    // 2, o,o,i BREAK
    // returns f,l

    // d, dog, dag
    // 0: d,d,d
    // 1: null, dog, dog BREAK
    // returns f,l

    let res = '';
    for (let i = 0; i < strs[0].length; i++) {
        let currChar = strs[0][i];
        if (currChar == null) break;;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != currChar) return res;
        }
        res += currChar;
    }
    return res;
};