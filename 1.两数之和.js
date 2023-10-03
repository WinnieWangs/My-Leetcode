/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const current  = nums[i];
        const diff = target - current;
        const diffIndex = map[diff];
        if (diffIndex !== undefined) {
            return [diffIndex, i];
        }
        map[current] = i;
    }
}
// @lc code=end

