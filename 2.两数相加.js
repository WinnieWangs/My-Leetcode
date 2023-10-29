/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head1 = l1
    let head2 = l2

    let hasMore = false

    let result = new ListNode(0)

    let currentResLink = result

    while(head1) {
        const l1Val = head1.val
        const l2Val = head2.val

        let total =  l1Val + l2Val + (hasMore ? 1 : 0)

        hasMore = false

        if (total >= 10) {
            total = total - 10
            hasMore = true
        }

        currentResLink.next = new ListNode(total)
        currentResLink = currentResLink.next

        if (!head1.next && !head2.next && !hasMore) {
            head1 = null
        } else {
            head1 = head1.next || new ListNode(0)
            head2 = head2.next || new ListNode(0)
        }
    }

    return result.next
};
// @lc code=end

