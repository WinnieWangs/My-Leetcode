/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    const dp = [nums[0], Math.max(nums[0], nums[1] ?? 0)]

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp.at(-1)
}
// @lc code=end
