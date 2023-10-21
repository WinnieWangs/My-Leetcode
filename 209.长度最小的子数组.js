/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let right = 0
    let minLength = 0
    let sum = 0

    while(right < nums.length) {
        sum += nums[right]

        while(sum >= target) {
            if (right - left + 1 < minLength || minLength === 0) {
                minLength = right - left + 1
            }

            sum -= nums[left]
            left ++
        }

        right++
    }

    return minLength
};
// @lc code=end

