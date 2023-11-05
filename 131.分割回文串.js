/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = []
    let path = []

    const isValid = (start, end) => {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s.charAt(i) !== s.charAt(j)) {
                return false
            }
        }
        return true
    }

     const backtrack = start => {
        if (start === s.length) {
            return res.push(path.slice())
        }
        for (let i = start; i < s.length; i++) {
            if (!isValid(start, i)) continue

            path.push(s.substring(start, i+1))
            backtrack(i + 1)
            path.pop()
        }
    }

    return backtrack(0), res
};
// @lc code=end

