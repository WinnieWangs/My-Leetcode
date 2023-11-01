/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = root => {
    let maxDepth = 0
    if (root === null) return maxDepth

    const backtrack = (node, depth) => {
        if (node.children.length === 0) {
           return maxDepth = Math.max(maxDepth, depth)
        }

        for(let child of node.children) {
            depth++

            backtrack(child, depth)

            depth--
        }
    }

    return backtrack(root, 1), maxDepth
};
// @lc code=end

