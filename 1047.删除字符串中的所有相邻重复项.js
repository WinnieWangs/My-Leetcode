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
const removeDuplicates = s => {
    let stack = []
    for (char of s) {
        if (stack.length && stack[stack.length - 1] == char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};
// @lc code=end

