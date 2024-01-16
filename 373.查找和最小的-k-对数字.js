/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k, reverse = false) {
    const len1 = nums1.length
    const len2 = nums2.length

    const res = []

    if (len1 > len2) return kSmallestPairs(nums2, nums1, k, true)

    const heap = []

    for (let i = 0; i < Math.min(k, len1); i++) {
        heap.push([i, 0])
    }

    for (let i = 0; i < k; i++) {
        let min = nums1[heap[0][0]] + nums2[heap[0][1]]
        let index = 0

        for (let j = 0; j < heap.length; j++) {
            const current = heap[j]
            const total = nums1[current[0]] + nums2[current[1]]

            if (total <= min) {
                min = total
                index = j
            }
        }

        const a = nums1[heap[index][0]]
        const b = nums2[heap[index][1]]

        if (!reverse) {
            res.push([a, b])
        } else {
            res.push([b, a])
        }

        if (nums2[heap[index][1] + 1] === undefined) {
            heap.splice(index, 1)
        } else {
            heap[index][1] += 1
        }
    }

    return res
};