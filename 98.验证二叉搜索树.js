/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// var isValidBST = function (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
//     if (root === null) return true
//     if (root.val <= min || root.val >= max) return false
//     return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
// };

const morris = (root, prev, flag) => {
    let cur = root, mostRight = null
    while (cur !== null) {
        mostRight = cur.left

        if (mostRight !== null) {
            while (mostRight.right !== null && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right === null) {
                mostRight.right = cur
                cur = cur.left
                continue
            }


            mostRight.right = null
        }

        if (prev >= cur.val) {
            flag = false
            break
        }

        prev = cur.val
        cur = cur.right
    }

    return flag
}

const isValidBST = root => {
    if (root === null) return true

    return morris(root, Number.MIN_SAFE_INTEGER, true)
}
// @lc code=end

