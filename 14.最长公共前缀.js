/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strings
 * @return {string}
 */
var longestCommonPrefix = function (strings) {
    if (strings.length === 0) return ''

    let [text, current] = ['', 0]

    for (let i = 0; i < strings[0].length; i++) {
        current = strings[0][i]

        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] !== current) {
                return text;
            }
        }

        text += current
    }

    return text
};
// @lc code=end

