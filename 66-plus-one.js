/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 1 2 3 -> 1 2 4
    // 999 -> 1 + 000
    // start from right to left
    // while carry exists, go to the left
    // if carry still exists after going through all digits, add a 1 to the start of result

    let carry = 1, i = digits.length - 1;
    while (carry > 0 && i >= 0) {
        digits[i] += carry;
        carry = Math.trunc(digits[i] / 10);
        digits[i] = digits[i] % 10;
        i--;
    }
    if (i < 0 && carry > 0) return [carry, ...digits];
    return digits;
};