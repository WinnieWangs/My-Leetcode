/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slowIndex = 1;
    for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== nums[fastIndex - 1]) {
            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
    }
    return slowIndex;
};

// @lc code=end

