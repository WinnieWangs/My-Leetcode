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
    const path = []

    const backtrack = (amount, index) => {
        if (amount === 0) return res.push([...path])

        for (let i = 0; i < candidates.length; i++) {
            if (index > i) continue

            if (amount - candidates[i] < 0) continue

            path.push(candidates[i])

            backtrack(amount - candidates[i], i)

            path.pop()
        }
    }

    return backtrack(target), res;
};
// @lc code=end

