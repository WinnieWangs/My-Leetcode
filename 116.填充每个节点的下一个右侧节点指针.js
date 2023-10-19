/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root === null) return null

    const queue = [root]

    while(queue.length > 0) {
        const len = queue.length

        let head = null

        for(let i = 0; i < len; i++) {
            const node = queue.shift()

            if (head !== null) head.next = node
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)

            head = node
        }
    }

    return root
};
// @lc code=end

