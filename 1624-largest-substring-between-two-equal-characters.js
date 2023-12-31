/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    // aa
    // abca
    // cbzxy
    // abcabca

    // i can make a map where the key is the letter, and the value is an array that holds the first and last index of the char
    // at the end, i can check the map for the max last-first index diff 

    const charMap = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charMap[char] === undefined) charMap[char] = [i]
        else charMap[char].push(i)
    }

    let maxDiff = -1;
    for (let char in charMap) {
        const indexArr = charMap[char];
        if (indexArr.length <= 1) continue;
        const currDiff = indexArr[indexArr.length - 1] - indexArr[0] - 1;
        if (currDiff > maxDiff) maxDiff = currDiff;
    }
    return maxDiff;
}