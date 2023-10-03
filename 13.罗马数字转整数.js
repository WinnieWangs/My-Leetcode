/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let sum = 0

    let head = romanMap[s[0]]

    for (let i = 1; i < s.length; i++) {
        const current = romanMap[s[i]]

        sum += head >= current ? head : -head

        head = current
    }

    sum += head

    return sum
};
// @lc code=end

