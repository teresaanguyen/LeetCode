/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
    let front = 0;
    let back = s.length - 1;
    while (front < back) {
        if (s[front] !== s[back]) {
            return false;
        } else {
            front++;
            back--;
        }
    }
    return true;
};