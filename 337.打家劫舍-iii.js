/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
const memo = new Map()
const rob = root => {
    if (!root) return 0

    if (memo.get(root)) return memo.get(root)

    const self = root.val + rob(root.left?.left) + rob(root.left?.right) + rob(root.right?.left) + rob(root.right?.right)
    const notSelf = rob(root.left) + rob(root.right)

    const res = Math.max(self, notSelf)

    return memo.set(root, res), res
}
// @lc code=end

