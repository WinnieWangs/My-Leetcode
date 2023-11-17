/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    if (nums.length === 1) return nums[0];

    const subRob = (subNums) => {
        const dp = [subNums[0], Math.max(subNums[0], subNums[1])];

        for(let i = 2; i < subNums.length; i++) {
            dp[i] = Math.max(dp[i - 2] + subNums[i], dp[i - 1]);
        }

        return dp[subNums.length - 1]
    }

    return Math.max(subRob(nums.slice(0, nums.length - 1)), subRob(nums.slice(1)));
};
// @lc code=end

