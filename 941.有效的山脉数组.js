/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let len = arr.length, left = 0, right = len - 1
    if (len < 3) {
        return false
    }
    while (left < len - 2 && arr[left] < arr[left + 1]) {
        left++
    }
    while (right > 1 && arr[right] < arr[right - 1]) {
        right--
    }
    return left === right
};
// @lc code=end

