/**
 * @param {number} n
 * @return {string[]}
 */

const genParensRecursive = (str, n, openCount, closedCount, res) => {
    if (openCount > n) return;
    if (closedCount > n) return;
    if (closedCount > openCount) return;

    if (str.length === n * 2) {
        res.push(str);
        return;
    }

    genParensRecursive(str + '(', n, openCount + 1, closedCount, res);
    genParensRecursive(str + ')', n, openCount, closedCount + 1, res);
}

var generateParenthesis = function(n) {
    // brute force approach, recursively create all combinations with every parens pair
    // a parens pair has an open parens before an closed parens
    // a valid combination has length of n * 2

    const res = [];
    genParensRecursive('', n, 0, 0, res)
    return res;
};