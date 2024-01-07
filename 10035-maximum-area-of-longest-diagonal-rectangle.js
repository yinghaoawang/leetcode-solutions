// Submitted for Weekly Contest 379

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let longestDiag = 0;
    let res = 0;
    for (let i = 0; i < dimensions.length; i++) {
        const length = dimensions[i][0];
        const width = dimensions[i][1];
        const diag = Math.sqrt(length * length + width * width);
        if (diag >= longestDiag) {
            if (diag === longestDiag) {
                if (length * width > res) {
                    res = length * width;
                }
            } else {
                longestDiag = diag;
                res = length * width;
            }
        }
    }
    return res;
};