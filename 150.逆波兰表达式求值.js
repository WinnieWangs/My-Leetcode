/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []

    let current = 0

    const operationHandler = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
    }

    while (current < tokens.length) {
        const char = tokens[current]
        const numberChar = Number(char)

        current++

        if (!isNaN(numberChar)) {
            stack.push(numberChar)
            continue
        }

        const last2 = stack.pop()
        const last1 = stack.pop()

        const res = operationHandler[char](last1, last2)

        stack.push(Number.parseInt(res))
    }

    return stack[0]
};
// @lc code=end

