/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};
    for (const num of arr) {
        map[num] = map[num] == null ? 1 : map[num] + 1;
    }
    const set = new Set();
    for (let key in map) {
        const count = map[key];
        if (set.has(count)) return false;
        set.add(count);
    }
    return true;
};