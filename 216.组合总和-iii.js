/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const path = []
    const res = []

    const max = Math.min(n, 9)

    const backtrack = (amount, start) => {
        if (amount === 0 && path.length === k) return res.push([...path])

        for (let i = start; i <= max; i++) {
            if (path.length > n) break
            if (amount - i < 0) break

            path.push(i)

            backtrack(amount - i, i + 1)

            path.pop()
        }
    }

    return backtrack(n, 1), res
};
// @lc code=end

