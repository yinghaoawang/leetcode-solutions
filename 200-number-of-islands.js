/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // dfs
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                res++;
                removeIsland(i, j);
            }
        }
    }

    return res;

    function removeIsland(i, j) {
        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1) return;
        if (grid[i][j] === '0') return;
        grid[i][j] = '0';
        removeIsland(i,j-1);
        removeIsland(i-1,j);
        removeIsland(i+1,j);
        removeIsland(i,j+1);
    }
};