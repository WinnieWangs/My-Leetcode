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
    if (root === null) return false
    let flag = false

    const traverse = (node, sum) => {
        if (node === null) return 0

        sum = sum + node.val

        const sumLeft = traverse(node.left, sum) + sum
        const sumRight = traverse(node.right, sum) + sum

        if (node.left || node.right) return
        if (sumLeft === targetSum || sumRight === targetSum) {
            return flag = true
        }
    }

    traverse(root, 0)

    return flag
};
// @lc code=end

