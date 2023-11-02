/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const path = []

    let count = 0

    const visited = []

    const backtrack = () => {
        if (path.length === n) {
            count++

            return count === k
        }

        for (let i = 1; i <= n; i++) {
            if (visited[i]) continue

            path.push(i)
            visited[i] = true

            if (backtrack(i + 1)) return true

            path.pop()
            visited[i] = false
        }
    }

    backtrack()

    return path.join('')
};
// @lc code=end

