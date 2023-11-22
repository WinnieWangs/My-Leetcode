/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length
    // 0不操作 1第一次持有 2第一次不持有 3第二次持有 4第二次不持有
    const dp = Array.from({ length: n }, () => new Array(5).fill(0))
    dp[0] = [0, -prices[0], 0, -prices[0], 0]
    for (let i = 1; i < n; i++) {
        const prev = dp[i-1]
        dp[i][0] = prev[0]
        dp[i][1] = Math.max(prev[1], prev[0] - prices[i])
        dp[i][2] = Math.max(prev[2], prev[1] + prices[i])
        dp[i][3] = Math.max(prev[3], prev[2] - prices[i])
        dp[i][4] = Math.max(prev[4], prev[3] + prices[i])
    }

    return Math.max(dp.at(-1)[2], dp.at(-1)[4])
};
// @lc code=end

