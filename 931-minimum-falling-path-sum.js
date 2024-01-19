/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    // 2 1 3
    // 6 5 4
    // 7 8 9

    // 2  1  3
    // 7  6  5
    // 13 13 14

    let n = matrix.length;
    const costs = [];
    costs.push(matrix[0]);
    for (let i = 1; i < n; i++) {
        costs.push([]);
    }

    const isValid = (i, j) => {
        return i >= 0 && i < n && j >= 0 && j < n;
    }

    const updateCosts = (i, j, nextI, nextJ) => {
        const pathSum = matrix[nextI][nextJ] + costs[i][j];
        if (costs[nextI][nextJ] === undefined || pathSum < costs[nextI][nextJ]) {
            costs[nextI][nextJ] = pathSum;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isValid(i + 1, j - 1)) {
                updateCosts(i, j, i + 1, j - 1)
            }
            if (isValid(i + 1, j)) {
                updateCosts(i, j, i + 1, j)
            }
            if (isValid(i + 1, j + 1)) {
                updateCosts(i, j, i + 1, j + 1)
            }
        }
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        console.log(costs[n-1][i])
        if (costs[n - 1][i] < min) min = costs[n - 1][i];
    }
    return min;
};