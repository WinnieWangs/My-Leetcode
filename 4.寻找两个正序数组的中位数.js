/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0, j = 0, res = 0

    const arr = []

    const len1 = nums1.length
    const len2 = nums2.length


    while (i < len1 && j < len2) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i++])
        } else {
            arr.push(nums2[j++])
        }
    }

    while (i < len1) arr.push(nums1[i++])

    while (j < len2) arr.push(nums2[j++])

    const len = arr.length

    if (len % 2 === 0) {
        return (arr[len / 2] + arr[len / 2 - 1]) / 2
    } else {
        return arr[(len - 1) / 2]
    }
};
// @lc code=end

