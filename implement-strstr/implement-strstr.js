/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let pointer = i;
            let indexNeedle = 0;
            let maxIndexNeedle = needle.length;
            while (indexNeedle < maxIndexNeedle) {
                if (haystack[pointer] === needle[indexNeedle]) {
                    pointer++;
                    indexNeedle++
                } else {
                    break;
                }
            }
            if (indexNeedle === maxIndexNeedle) {
                return i;
            }
        }
    }
    return -1;
};