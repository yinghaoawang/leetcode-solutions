/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    // brute force
    // n = 3
    // 1+2+3=3 => 6=3
    // 1+2=2+3 => 3=5
    // 1=1+2+3 => 1=6

    // sum 1 to n
    // 1+2+3=6
    // L = 6

    // start with n (3)
    // R = 3

    // 6=3 no
    // subtract 3 from left, add 2 to right
    // 3=5
    // subtract 2 from left, add 1 to right
    // 1=6

    // algorithm for the iteration is
    // let i = n - 1; i >= 1; i--
        // l -= n + 1
        // r += n

    let l = 0;
    for (let i = 1; i <= n; i++) l += i;
    let r = n;
    // console.log(l, r);

    if (l === r) return n;
    for (let i = n; i >= 2; i--) {
        l -= i;
        r += i - 1;
        // console.log(l, r);
        if (l === r) return i - 1;
    }
    return -1;
};