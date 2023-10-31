/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []

    const backtrack = (amount, path = [], preIndex) => {
        if (amount < 0) return
        if (amount === 0) return res.push(path.slice())

        for (let i = 0, l = candidates.length; i < l; i++) {
            if (preIndex > i) continue

            path.push(candidates[i])
            backtrack(amount - candidates[i], path, i)
            path.pop()
        }
    }

    return backtrack(target), res
};
// @lc code=end

