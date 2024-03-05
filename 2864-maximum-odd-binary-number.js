/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // i can count the number of ones and zeroes, then put one one at end, the rest of the ones atthe start, and zeroes between them
    // corner cases: no ones
    let oneCount = 0;
    let zeroCount = 0;
    for (const c of s) {
        if (c === '1') oneCount++;
        else if (c === '0') zeroCount++;
    }
    let zeroes = '';
    for (let i = 0; i < zeroCount; i++) zeroes += '0';
    
    if (oneCount === 0) {
        return zeroes;
    } else {
        let ones = '';
        for (let i = 1; i < oneCount; i++) ones += '1';
        return ones + zeroes + '1';
    }

    // O(1) space complexity version (STUPID BECAUSE PREVIOUS IS BETTER)
    // let res = '';
    // let oneEndFlag = false;
    // let zeroIndex = 0;
    // for (const c of s) {
    //     if (c === '1' && oneEndFlag === false) {
    //         res += '1';
    //         oneEndFlag = true;
    //     } else if (c === '1') {
    //         res = '1' + res;
    //         zeroIndex++;
    //     } else if (c === '0') {
    //         res = res.substring(0, zeroIndex) + '0' + res.substring(zeroIndex);
    //     } else {
    //         throw new Error(`Unrecognized character: ${c}`);
    //     }
    // }
    // return res;
};