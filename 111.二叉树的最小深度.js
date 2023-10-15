/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0
    let depth = 0
    let queue = [root]

    while(queue.length) {
        depth++
        const len = queue.length

        for(let i = 0; i < len; i++) {
            const node = queue.shift()

            if (node.left === null && node.right === null) {
                queue = []
                break;
            }

            if (node.left !== null) {
                queue.push(node.left)
            }

            if (node.right !== null) {
                queue.push(node.right)
            }
        }
    }

    return depth
};
// @lc code=end

