/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    // make an array where each index is the row, and the device is the value
    // iterate through the array from end to start, storing the previous value
    // multiply the previous value by the current value and add to result

    // optimization, don't need to make a new array, can just work with existing array

    let res = 0;
    let prevCount = -1;
    for (let row = 0; row < bank.length; row++) {
        let currCount = 0;
        for (char of bank[row]) {
            if (char === '1') currCount++;
        }
        if (currCount === 0) continue;
        if (prevCount > 0) res += currCount * prevCount;

        prevCount = currCount;
    }
    return res;
};