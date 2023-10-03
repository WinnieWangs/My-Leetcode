/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let right = 0
    let left = 0
    let mid

    weights.forEach(item => {
        right += item
        left = left < item ? item : left
    })

    const getDays = minWeight => {
        let current = 0
        let point = 0
        for (let weight of weights) {
            const w = weight * 1

            if (current + w <= minWeight) {
                current += w
            } else {
                point += 1

                current = w
            }
        }

        return point
    }

    while (left < right) {
        mid = left + Math.floor((right - left) / 2)

        const d = getDays(mid)

        if (d < days) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return right
};
// @lc code=end

