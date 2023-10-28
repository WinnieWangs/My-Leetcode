/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const arr = []
    let index = 0

    while (index < s.length) {
        const current = s.charAt(index)

        if (arr[arr.length - 1] === current) {
            arr.pop()
        } else {
            arr.push(current)
        }

        index++
    }

    return arr.join('')
};
// @lc code=end

