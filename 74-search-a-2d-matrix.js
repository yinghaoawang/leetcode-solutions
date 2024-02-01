/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // find row
    const rowSize = matrix.length;
    const colSize = matrix[0].length;
    let rowL = 0, rowR = rowSize - 1, row;

    const targetInRow = (row) => {
        return target >= matrix[row][0] && target <= matrix[row][colSize - 1];
    }

    while (rowL <= rowR) {
        row = Math.trunc((rowL + rowR) / 2);
        if (targetInRow(row)) break;
        if (target < matrix[row][0]) {
            rowR = row - 1;
        } else if (target > matrix[row][0]) {
            rowL = row + 1;
        } else {
            return false;
        }
    }
    
    if (row < 0) return false;

    // find col
    let colL = 0, colR = colSize - 1, col;
    while (colL <= colR) {
        col = Math.trunc((colL + colR) / 2);
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) colL = col + 1;
        else colR = col - 1;
    }

    return false;
};