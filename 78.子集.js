/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    const visited = []
    const path = []

    const backtrack = (start) => {
        if (start === nums.length + 1) return

        res.push([...path])

        for (let i = start; i < nums.length; i++) {
            if (visited[i]) continue
            path.push(nums[i])
            visited[i] = true

            backtrack(i + 1)

            path.pop()
            visited[i] = false
        }
    }

    return backtrack(0), res
};
// @lc code=end

