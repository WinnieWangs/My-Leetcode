/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'))

    let count = 0

    const isValid = (row, col) => {
        // 纵向
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false
        }

        for (let i = row - 1; i >= 0; i--) {
            const distance = row - i

            // 左上
            if (board[i][col - distance] === 'Q') return false

            // 右上
            if (board[i][col + distance] === 'Q') return false
        }

        return true
    }

    const backtrack = (row = 0) => {
        if (row === n) return count++

        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue

            board[row][col] = 'Q'

            backtrack(row + 1)

            board[row][col] = '.'
        }

        return count
    }

    return backtrack()
};
// @lc code=end

