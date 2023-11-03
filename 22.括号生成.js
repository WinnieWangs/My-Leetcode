/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
// ["((()))","(()())","(())()","()(())","()()()"]
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    const res = []

    const dfs = (left, right, path) => {
        if (path.length === 2 * n) {
            return res.push(path)
        }

        if (left > 0) {
            dfs(left - 1, right, path + '(')
        }

        if (left < right) {
            dfs(left, right - 1, path + ')')
        }
    }

    dfs(n, n, '')

    return res
};
// @lc code=end

