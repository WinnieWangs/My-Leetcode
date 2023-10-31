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
    candidates = candidates.sort((a, b) => a - b)

    const visited = []

    const res = []

    const path = []

    const len = candidates.length

    let amount = 0

    const backtrack = (preIndex) => {
        if (amount === target) return res.push(path.slice())

        for (let i = 0; i < len; i++) {
            if (preIndex > i) continue
            if (visited[i]) continue
            if (amount + candidates[i] > target) break;
            if (candidates[i] === candidates[i-1] && !visited[i-1]) continue

            path.push(candidates[i])
            visited[i] = true
            amount += candidates[i]

            backtrack(i)

            path.pop()
            visited[i] = false
            amount -= candidates[i]
        }
    }

    return backtrack(), res
};
// @lc code=end

