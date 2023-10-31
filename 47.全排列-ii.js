/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 0) return []

    nums = nums.sort()

    const len = nums.length

    const res = []

    const path = []

    const visited = []

    const backtrack = (index = 0) => {
        if (index === len) {
            return res.push(path.slice())
        }

        for(let i = 0; i < len; i++) {
            if (i + 1 > len) return void 0

            if (visited[i]) continue

            if (nums[i] === nums[i - 1] && !visited[i - 1]) continue

            path.push(nums[i])
            visited[i] = true

            backtrack(index + 1)

            path.pop()
            visited[i] = false
        }
    }

    return backtrack(), res
};
// @lc code=end

