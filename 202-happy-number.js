/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const history = new Set();
    let val = n;
    while (true) {
        val = sumSquareDigits(val);
        if (val === 1) return true;
        if (history.has(val)) return false;
        history.add(val);
    }
    function sumSquareDigits(value) {
        let res = 0;
        for (const c of value + '') {
            res += c * c;
        }
        return res;
    }
};