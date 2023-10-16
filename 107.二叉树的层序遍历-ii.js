/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
    if (!root) return []
    const list = []
    const queue = [root]

    while(queue.length) {
        const currentLevel = []

        const len = queue.length

        for(let i = 0; i < len; i++) {
            const node = queue.shift()

            currentLevel.push(node.val)

            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }

        list.unshift(currentLevel)
    }
    return list
};
// @lc code=end

