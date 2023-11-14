/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const board = Array.from({ length: m }, () => new Array(n).fill(1))

    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            board[x][y] =  board[x - 1][y] + board[x][y - 1]
        }
    }

    return board[m - 1][n - 1]
};
// @lc code=end

