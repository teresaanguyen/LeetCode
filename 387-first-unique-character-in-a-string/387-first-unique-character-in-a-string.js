/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {};
    for (letter of s) {
        count[letter] ? count[letter]++ : count[letter] = 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};