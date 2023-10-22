/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
    let sum = 0

    const traverse = (node, isLeft) => {
        if (!node) return 0

        const { val, left, right } = node

        if (isLeft && !left && !right) sum += val

        left && traverse(left, true)
        right && traverse(right, false)
    }

    return traverse(root), sum
};
// @lc code=end

