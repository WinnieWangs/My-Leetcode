/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const stacks = []

    const traverse = (node, path) => {
        if (node === null) return

        const connectStr = path === '' ? '' : '->'
        path += `${connectStr}${node.val}`



        traverse(node.left, path)


        traverse(node.right, path)

        if (node.left === null && node.right === null) stacks.push(path)

    }

    traverse(root, '')

    return stacks
};
// @lc code=end

