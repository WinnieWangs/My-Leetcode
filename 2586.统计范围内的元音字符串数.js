/*
 * @lc app=leetcode.cn id=2586 lang=javascript
 *
 * [2586] 统计范围内的元音字符串数
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = { a: true, e: true, i: true, o: true, u: true }
    let count = 0
    const isValid = str => {
        const start = str.charAt(0)
        const end = str.charAt(str.length - 1)
        return vowels[start] && vowels[end]
    }

    for (let i = left; i <= right; i++) {
        if (isValid(words[i])) count++
    }

    return count
};
// @lc code=end

