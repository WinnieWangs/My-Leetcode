/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return []
    const res = []

    const len = nums.length

    const backtrack = (index, path = []) => {
        if (index === len) return res.push(path.slice())

        for(let i in nums) {
            if (index + 1 > len) break;

            if (path.includes(nums[i])) continue

            path.push(nums[i])
            backtrack(index + 1, path)
            path.pop()
        }
    }

    return backtrack(0), res
};
// @lc code=end

