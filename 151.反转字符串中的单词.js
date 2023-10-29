/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = ''
    let word = ''
    for (let i = s.length - 1; i >= -1; i -= 1) {
        if (i === -1 || s[i] === ' ') {
            if (word) {
                if (res) {
                    res = res + ' ' + word
                } else {
                    res = word
                }
            }
            word = ''
        } else {
            word = s[i] + word
        }
    }
    return res
};
// @lc code=end

