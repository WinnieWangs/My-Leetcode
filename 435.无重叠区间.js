/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = intervals => {
    intervals = intervals.sort((a, b) => a[1] - b[1])

    let count = 1

    let x = intervals[0][1]

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= x) {
            count++

            x = intervals[i][1]
        }
    }

    return intervals.length - count
};
// @lc code=end

