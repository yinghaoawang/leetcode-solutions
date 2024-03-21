/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    // 1. create 2 maps storing the count of the each character
    // 2. iterate through s, for each char not in order, add one of that char to the end of order
    // 3. iterate through order, for each char in s map, append to result

    const orderMap = {};
    const sMap = {};
    for (const char of order) {
        if (orderMap[char] === undefined) orderMap[char] = 0;
        orderMap[char]++;
    }
    for (const char of s) {
        if (sMap[char] === undefined) sMap[char] = 0;
        sMap[char]++;
    }

    for (const char of s) {
        if (orderMap[char] == null) {
            orderMap[char] = 1;
            order += char;
        }
    }

    let res = '';
    for (const char of order) {
        const count = sMap[char];
        for (let i = 0; i < count; i++) {
            res += char;
        }
    }
    return res;
};