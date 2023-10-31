/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []

    const backtrack = (pre = 1, path = []) => {
        if (path.length === k) {
            return res.push([...path])
        } 

        for (let i = pre; i <= n - (k - path.length) + 1; i++) {
            path.push(i)

            backtrack(i + 1, path)

            path.pop()
        }
    }

    return backtrack(), res
};
// @lc code=end

