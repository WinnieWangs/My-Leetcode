/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    if (root === null) return res

    const queue = [root]

    while(queue.length) {
        const len = queue.length
        const level = []

        for (let i = 0; i < len; i++) {
            const { val, children } = queue.shift()

            level.push(val)

            if (!children) continue

            for(let childIndex in children) {
                queue.push(children[childIndex])
            }
        }

        res.push(level)
    }

    return res
};
// @lc code=end

