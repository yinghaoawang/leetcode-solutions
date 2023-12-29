/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    // brute force
    // iterate through each word in words, for each letter of the word, check if chars contains it

    // can be optimized where i create a hashmap of each character and put the counts of the chars in there
    // furthermore, i need to count the amount of chars in the current word to compare to the map, so i will make a map for the current word as well
    // i will then determine if the chars can form the word by iterating through the wordMap, and checking if wordMap[key] <= charMap[key]
    // if all of the cases are true, then i add the length of the word to the result

    let res = 0;
    const charMap = {};
    for (const char of chars) {
        if (charMap[char] != null) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (const word of words) {
        const wordMap = {};
        for (const char of word) {
            if (wordMap[char] != null) {
                wordMap[char]++;
            } else {
                wordMap[char] = 1;
            }
        }

        let resValue = word.length;
        for (const key in wordMap) {
            if (charMap[key] == null) {
                resValue = 0;
                break;
            };
            if (wordMap[key] > charMap[key]) {
                resValue = 0;
                break;
            }
        }
        res += resValue;
    }

    return res;
};