/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    const isValid = (row, col, val) => {
        let len = board.length
        // 行不能重复
        for (let i = 0; i < len; i++) {
            if (board[row][i] === val) {
                return false
            }
        }
        // 列不能重复
        for (let i = 0; i < len; i++) {
            if (board[i][col] === val) {
                return false
            }
        }
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false
                }
            }
        }
        return true
    }

    const backtrack = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] !== '.') continue

                for (let num = 1; num <= 9; num++) {
                    if (!isValid(row, col, num + '')) continue

                    board[row][col] = num + ''

                    if (backtrack()) return true

                    board[row][col] = '.'
                }

                return false
            }
        }

        return true
    }

    return backtrack(), board
};
// @lc code=end

