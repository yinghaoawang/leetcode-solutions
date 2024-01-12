/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    // O(1) space complexity using 2 pointers
    // always even so
    // book
    // i = 0, j = 4/2
    const vowels = 'aeiouAEIOU';
    let aCount = 0, bCount = 0;
    let i = 0, j = s.length / 2;
    while (i < s.length / 2) {
        if (vowels.includes(s[i])) aCount++;
        if (vowels.includes(s[j])) bCount++;
        i++;
        j++;        
    }
    return aCount === bCount;
};