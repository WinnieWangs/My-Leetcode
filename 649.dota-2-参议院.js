/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = senate => {
    const n = senate.length
    const banList = new Array(n).fill(false)
    let ban = 0
    let r = 0
    let d = 0
    let i = 0

    while (ban + r + d < n) {
        if (!banList[i]) {
            const char = senate.charAt(i)

            if (char === "R") {
                if (d) {
                    d--
                    ban++
                    banList[i] = true
                } else {
                    r++
                }
            }

            if (char === "D") {
                if (r) {
                    r--
                    ban++
                    banList[i] = true
                } else {
                    d++
                }
            }
        }

        i = i === n - 1 ? 0 : i + 1
    }

    return d > r ? 'Dire' : 'Radiant'
};
// @lc code=end

