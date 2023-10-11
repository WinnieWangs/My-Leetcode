/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
let min = 2 ^ 32
var minDepth = function (root) {
    if (root === null) return 0

    runner(root, 1)

    return min
};

const runner = (root, depth) => {
    if (root === null || (root.left === null && root.right === null)) {
        min = Math.min(min, depth)
    }

    if (depth < min) {
        if (root.left !== null) runner(root.left, depth + 1)
        if (root.right !== null) runner(root.right, depth + 1)
    }
}


// @lc code=end

