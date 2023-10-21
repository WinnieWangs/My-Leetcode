/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let flag = false
    if (root === null) return flag

    const traverse = (node, sum = 0) => {
        if (flag) return
        if (node === null) return 0
        sum += node.val
        if (node.left === null && node.right === null && sum === targetSum) {
            flag = true
        }
        traverse(node.left, sum)
        traverse(node.right, sum)
    }

    return traverse(root), flag
};
// @lc code=end

