/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @return {number}
 */
var removeDuplicates = function(numbers) {
    const o = {}

    const arr = []

    for(let i = 0; i < numbers.length; i++) {
        if(!o[numbers[i]]) {
            arr.push(numbers[i])

            o[numbers[i]] = 1
        }
    }

    return arr
};
// @lc code=end

