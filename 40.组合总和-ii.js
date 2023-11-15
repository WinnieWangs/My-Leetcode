/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
   const result = []

   const path = []

   candidates = candidates.sort((a, b) => a - b)

   const visited = []

   const backtrack = (amount, start = 0) => {
        if (amount === 0) {
            return result.push(path.slice())
        } 

        for(let i = start; i < candidates.length; i++) {
            if (candidates[i] > amount) break

            if (i > 0 && candidates[i] === candidates[i - 1] && !visited[i - 1]) continue

            path.push(candidates[i])
            visited[i] = true

            backtrack(amount - candidates[i], i + 1)

            path.pop()
            visited[i] = false
        }
   }

   return backtrack(target), result
};
// @lc code=end

