/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // palindromic, 2 pters
    // find first in array, iterative
    for (const word of words) {
        let l = 0, r = word.length - 1;
        let isPalindrome = true;
        while (l <= r) {
            if (word[l] != word[r]) {
                isPalindrome = false;
                break;
            }
            l++;
            r--;
        }
        if (isPalindrome) return word;
    }
    return '';
};