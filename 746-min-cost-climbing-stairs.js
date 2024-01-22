/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 10, 15, 20
    // 10, 15 base case
    // 10, 15, 20 + min(10 + 15)
    //         cost[i] + min(dp[i-2], dp[i-1])
    cost.push(0);
    const dp = [cost[0], cost[1]];
    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i-2], dp[i-1]);
    }
    return dp[dp.length - 1];
};