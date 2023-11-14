/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost, memo = [0, 0]) {
    for (let i = 2; i <= cost.length; i++) {
        memo[i] = Math.min(memo[i - 1] + cost[i - 1], memo[i - 2] + cost[i - 2])
    }

    return memo[cost.length]
};
// @lc code=end

