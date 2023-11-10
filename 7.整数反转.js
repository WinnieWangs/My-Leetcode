/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = 0

    while (x !== 0) {
        num = num * 10 + x % 10
        if (num > 2147483647 || num < -2147483648) return 0
        x = Number.parseInt(x / 10)
    }

    return num
};
// @lc code=end

