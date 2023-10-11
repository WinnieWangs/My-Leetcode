/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let res = 0

    const traveler = (node, level = 0) => {
        if (!n) return level

        const cL = level + 1

        const l = traveler(n.left, cL)
        const r = traveler(n.right, cL)

        res = Math.max(res, l + r - 2 * cL)

        return Math.max(l, r)
    }

    traveler(root)

    return res
};
// @lc code=end

