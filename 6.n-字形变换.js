/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
var convert = function (s, numRows) {
    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }

    const t = r * 2 - 2;
    const ans = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < n - i; j += t) {

            ans.push(s[j + i]);
            if (0 < i && i < r - 1 && j + (t - i) < n) {
                ans.push(s[j + (t - i)]);
            }
        }
    }
    return ans.join('');
};
// @lc code=end

