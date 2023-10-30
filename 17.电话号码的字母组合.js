/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
let codeMap = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
]

var letterCombinations = function (digits) {
    if (digits === '' || digits === '1') return []

    const res = []

    const dfs = (string, index) => {
        const code = digits.charAt(index)
        const currentCode = codeMap[code]

        if (!currentCode) {
            return res.push(string)
        }

        for (let i = 0, l = currentCode.length; i < l; i++) {
            dfs(string + currentCode.charAt(i), index + 1)
        }
    }

    return dfs('', 0), res
};
// @lc code=end

