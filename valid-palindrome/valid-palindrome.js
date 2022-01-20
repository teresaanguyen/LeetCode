/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
    const reversed = s.split('').reverse().join('');
    return s === reversed
};