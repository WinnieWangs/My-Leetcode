/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let min = prices[0]
    let diff = 0

    for (let i = 1; i < prices.length; i++) {
        if (min >= prices[i]) min = prices[i]

        diff = Math.max(prices[i] - min, diff)
    }

    return diff
}
// @lc code=end

