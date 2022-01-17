/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let temp = {};
    let i = 0;
    let j = 1;
    if (s.length === 1) {
        return 1;
    }
    while (i < s.length) {
        if (temp[s[i]] === undefined) {
            temp[s[i]] = 1;
        }
        if (temp[s[j]] !== undefined || j === s.length) {
            let chars = Object.keys(temp);
            let length = chars.length;
            if (length > result) {
                result = length;
            }
            temp = {};
            i++;
            j = i + 1;
        } else {
            temp[s[j]] = 1;
            j++;
            if (j >= s.length) {
                i++;
                j = i + 1;
            }
        }
    }
    // return result
    return result;
};