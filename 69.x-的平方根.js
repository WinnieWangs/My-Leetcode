/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1) return 1

    let left = 1
    let right = Math.floor(x / 2)
    let mid

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        
        if (mid * mid === x) return mid

        if (mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
};
// @lc code=end

