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
    const chessboard = Array.from({ length: n }, () => Array(n).fill(false))

    let count = 0

    const isValid = (row, col) => {
        for (let i = row - 1; i >= 0; i--) {
            const currentRow = chessboard[i]
            const horizontalDistance = row - i
            if (currentRow[col]) return false
            if (currentRow[col - horizontalDistance]) return false
            if (currentRow[col + horizontalDistance]) return false
        }
        return true
    }

    const backtrack = (row = 0) => {
        if (row === n) return count++

        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue

            chessboard[row][col] = true

            backtrack(row + 1)

            chessboard[row][col] = false
        }

        return count
    }

    return backtrack()
};
// @lc code=end

