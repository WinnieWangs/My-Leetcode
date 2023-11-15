/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} dp
 * @return {number}
 */
var uniquePathsWithObstacles = function(dp) {
    if (dp[0][0] || dp.at(-1).at(-1)) return 0

    const m = dp[0].length
    const n = dp.length

    for(let x = 0; x < n; x++) {
        for(let y = 0; y < m; y++) {
            if (dp[x][y] === 1) {
                dp[x][y] = 0
                continue
            }

            if (x === 0 && y === 0) {
                dp[x][y] = 1
                continue
            }

            const left = x === 0 ? 0 : dp[x - 1][y]
            const up = y === 0 ? 0 : dp[x][y - 1]

            dp[x][y] = left + up
        }
    }

    return dp.at(-1).at(-1)
};
// @lc code=end
