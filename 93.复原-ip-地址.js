/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = []
    const path = []

    const isValid = str => {
        const numberStr = Number(str)

        if (isNaN(numberStr)) return false
        if (numberStr > 255 || numberStr < 0) return false
        if (numberStr + '' !== str) return false

        return true
    }

    const backtrack = start => {
        if (start === s.length && path.length === 4) {
            return res.push([...path].join('.'))
        }

        for (let i = start; i < s.length; i++) {
            if (path.length >= 4) break
            const stringBetweenStartAndCurrentIndex = s.substring(start, i + 1)

            if (isValid(stringBetweenStartAndCurrentIndex)) {

                path.push(stringBetweenStartAndCurrentIndex)
                backtrack(i + 1)
                path.pop()
            }
        }
    }

    return backtrack(0), res
};
// @lc code=end

