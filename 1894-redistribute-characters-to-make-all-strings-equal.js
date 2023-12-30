/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    // aaaaaa cc -> acaa acaa 
    // a:6 c:2

    // abc aabc bc -> abc abc abc
    // a:3 b:3 c:3

    // aaaaab a a abbbbbbb -> aabb aabb aabb aabb
    // a:8 b:8

    // return true if for each letter in all the words have a count that is divisible by the length of words

    const wordMap = {};
    for (let word of words) {
        for (const char of word) {
            if (wordMap[char] == null) wordMap[char] = 1
            else wordMap[char]++;
        }
    }

    for (let key in wordMap) {
        const value = wordMap[key];
        if (value == null || value == 0) return false;
        if (value % words.length != 0) return false; 
    }

    return true;
};