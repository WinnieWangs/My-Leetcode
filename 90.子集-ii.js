/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a, b) => a - b)
    const res = []
    const visited = []
    const path = []

    const backtrack = (start) => {
        if (start === nums.length + 1) return

        res.push([...path])

        for (let i = start; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue
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

