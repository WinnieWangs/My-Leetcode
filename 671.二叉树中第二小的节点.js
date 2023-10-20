/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
    let res = Number.MAX_SAFE_INTEGER
    if (!root) return res
    let queue = [root]

    while(queue.length) {
        const len = queue.length

        for (let i = 0; i < len; i++) {
            const { val, left, right } = queue.shift()

            if (val > root.val) {
                res = Math.min(res, val)
            }

            if (left) queue.push(left)
            if (right) queue.push(right)
        }
    }

    return res === Number.MAX_SAFE_INTEGER ? -1 : res
};
// @lc code=end

