/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let left = 0, right = height.length - 1

    let max = 0

    while (left <= right) {
        const indexDiff = Math.abs(right - left)
        const maxheight = Math.min(height[left], height[right])
        max = Math.max(max, indexDiff * maxheight)

        if (height[right] - height[left] >= 0) {
            left++
        } else {
            right--
        }
    }

    return max
}

// @lc code=end

