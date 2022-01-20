/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // variable for longest common prefix
    let lcp = ''
    // sort array
    strs = strs.sort();
    // iterate and compare first and last
    for (let i = 0; i < strs[0].length; i++) {
        // if letters match add to lcp
        if (strs[0][i] === strs[strs.length - 1][i]) {
            lcp += strs[0][i];
        } else {
            break;
        }
    }
    return lcp;
};