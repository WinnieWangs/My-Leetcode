/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points = points.sort((a, b) => a[1] - b[1])

    let count = 1

    let x = points[0][1]

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] > x) {
            count++

            x = points[i][1]
        }
    }

    return count
};
// @lc code=end

