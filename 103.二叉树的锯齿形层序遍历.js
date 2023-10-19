/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const res = []
    if (root === null) return res

    const queue =[root]
    let isOddLevel = true

    while(queue.length) {
        const len = queue.length

        const level = []

        for(let i = 0; i < len; i++) {
            const { val, left, right } = queue.shift()

            const { push, unshift } = Array.prototype

            const method = isOddLevel ? push : unshift

            method.call(level, val)

            if (left !== null) queue.push(left)
            if (right !== null) queue.push(right)
        }

        res.push(level)
        isOddLevel = !isOddLevel

    }

    return res
};
// @lc code=end

