/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    // 0 1 
    // check if any of the 4 edges is an island, if it's not, add 1 to perimeter
    let res = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                // check all 4 edges if it's not land
                if (i - 1 < 0 || grid[i - 1][j] !== 1) res++;
                if (i + 1 > grid.length - 1 || grid[i + 1][j] !== 1) res++;
                if (j - 1 < 0 || grid[i][j - 1] !== 1) res++;
                if (j + 1 > grid[i].length - 1 || grid[i][j + 1] !== 1) res++;
            }
        }
    }

    return res;
};