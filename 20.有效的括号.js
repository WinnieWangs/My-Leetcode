/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const endMap = [')', ']', '}']

    const stringArr = s.split('')

    for(let i = 0; i < stringArr.length; i++) {
        const char = stringArr[i];

        const match = map[char]
        if (match) {
            stack.push(match);
            continue;
        }

        if (endMap.includes(char)) {
            if (stack.pop()!== char) {
                return false
            }
        } 
    }

    if (stack.length > 0) return false

    return true
};
// @lc code=end

