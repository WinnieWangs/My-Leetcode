/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = root
    let time = 0
    const traveler = (node, node1, node2) => {
        if (node === null) return 0

        const left = traveler(node.left, node1, node2)
        const right = traveler(node.right, node1, node2)

        const middle = node.val === node1.val || node.val === node2.val ? 1 : 0

        time = left + right + middle

        if (time === 2) {
            res = node

            return 0
        }

        return time
    }

    traveler(root, p, q)

    return res
};
// @lc code=end

