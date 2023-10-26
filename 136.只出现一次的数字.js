/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    nums = nums.sort();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i]
    }
};
// @lc code=end

