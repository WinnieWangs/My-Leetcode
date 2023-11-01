/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
     // const chessboard = new Array(n).fill(new Array(n).fill('.'))
     const chessboard = Array.from({ length: n }, () => Array(n).fill('.'));

     const res = []
     const isValid = (row, col) => {
         // 纵向
         for (let i = 0; i < row; i++) {
             if (chessboard[i][col] === 'Q') return false
         }
 
         for (let i = row - 1; i >= 0; i--) {
             const horizontalDistance = row - i
 
             // 左上
             if (chessboard[i][col - horizontalDistance] === 'Q') {
                 return false
             }
 
             // 右上
             if (chessboard[i][col + horizontalDistance] === 'Q') {
                 return false
             }
         }
 
         return true
     }
 
     const backtrack = row => {
         if (row === n) return res.push(chessboard.map(rows => rows.join('')));
 
         for (let col = 0; col < n; col++) {
             if (!isValid(row, col)) continue
 
             chessboard[row][col] = 'Q'
 
             backtrack(row + 1)
 
             chessboard[row][col] = '.'
         }
     }
 
     return backtrack(0), res
};
// @lc code=end

