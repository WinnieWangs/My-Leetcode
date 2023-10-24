/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
var recoverTree = function (root) {
    let t1 = t2 = pre = null

    const traverse = node => {
        if (node === null) return

        traverse(node.left)

        if (pre !== null && pre.val > node.val) {
            if (t1 === null) t1 = pre
            t2 = node
        }

        pre = node

        traverse(node.right)
    }

    traverse(root)

    const temp = t1.val

    t1.val = t2.val

    t2.val = temp
};
// @lc code=end

