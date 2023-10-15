/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    const stacks = []

    const traverse = (node, level) => {
        if (!node) return

        if (!stacks[level]) stacks[level] = []
        stacks[level].push(node.val)

        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }

    traverse(root, 0)

    return stacks
};
// @lc code=end

