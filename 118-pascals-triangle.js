/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // i can iteratively generate pascal's triangle
    // 0: 1     1
    // 1: 11    1 1
    // 2: 121   1 p[i-1]+p[i] 1
    // 3: 1331  1 p[i-1]+p[i] p[i-1]+p[i] 1
    // 4: 14641 1 p[i-1]+p[i] p[i-1]+p[i] p[i-1]+p[i] 1

    // iterate as i from 0 to < numRows
    // number of elements to create is i + 1
    // for element j, if j = 0 or j = i, then it's 1
    // otherwise j = prevArray[j-1] + prevArray[j]

    // benefits of this approach is that it's simple, space complexity is O(N^2)
    const res = [];

    let prevRow;
    for (let i = 0; i < numRows; i++) {
        const currRow = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) currRow.push(1);
            else {
                currRow.push(prevRow[j-1] + prevRow[j]);
            }
        }
        res.push(currRow);
        prevRow = currRow;
    }
    return res;
}