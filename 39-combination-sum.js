/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // backtracking
    const res = [];
    function dfs(index, output, sum) {
        if (index >= candidates.length) return;
        if (sum > target) return;
        if (sum === target) {
            res.push([...output]);
            return;
        }
        
        // take
        sum += candidates[index];
        output.push(candidates[index]);
        dfs(index, output, sum);
        sum -= candidates[index];
        output.pop();

        // not take
        dfs(index + 1, output, sum);
    }
    dfs(0, [], 0);
    return res;
};