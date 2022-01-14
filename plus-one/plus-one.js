/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // variable to keep track of add one
    // iterate through array starting at the end
    for (let i = digits.length - 1; i >= 0; i--) {
        // if first element is 9 (i = 0)
        if (digits[i] === 9 && i === 0) {
            // element is zero
            digits[i] = 0;
            // splice 1 at the front
            digits.splice(0, 0, 1)
            return digits;
        }
        // if element is not 9
        if (digits[i] !== 9) {
            // increment element
            const temp = digits[i] + 1;
            digits[i] = temp;
            return digits;
        }
        // if element is nine
        if (digits[i] === 9) {
            // element is 0
            digits[i] = 0;
        }
    }
};