/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const arr = nums.sort((a, b) => a - b);
    let res = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length - 2; i++) {
        let left = i + 1
        let right = arr.length - 1;

        while(left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if(Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }

            if(sum > target) {
                right--;
            } else if(sum < target) {
                left++;
            } else {
                return sum;
            }
        }
    }

    return res
};
// @lc code=end

