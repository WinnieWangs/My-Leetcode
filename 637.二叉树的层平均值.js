/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = []
    if (root.val === null) return res

    const queue = [root]

    while(queue.length) {
        const len = queue.length
        let sum = 0

        for(let i = 0; i < len; i++) {
            const { val, left, right } = queue.shift()

            sum += val

            if (left !== null) queue.push(left)
            if (right !== null) queue.push(right)
        }

        res.push(sum / len)
    }

    return res
};
// @lc code=end

