/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = nums => {
    let end = 0
    let max = 0
    let count = 0

    for(let i = 0, l = nums.length - 1; i < l; i++) {
        max = Math.max(i + nums[i], max)

        if (end === i) {
            end = max
            count++
        }
    }

    return count
}
// @lc code=end

