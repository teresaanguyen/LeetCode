/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // keep count of characters
    let countObj = {};
    // iterate through s and add to count
    for (letter of s) {
        countObj[letter] ? countObj[letter]++ : countObj[letter] = 1;
    }
    // iterate through t
    for (letter of t) {
        // if letter is in count and equal to 1 delete
        if (countObj[letter] === 1) {
            delete countObj[letter];
        } else if (countObj[letter]) {
            countObj[letter]--;
        } else if (countObj[letter] === undefined) {
            return false;
        }
        // return false
    }
    return Object.keys(countObj).length === 0
};