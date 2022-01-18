/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const nextNumber = (n) => {
        // keep track of total sum
        let totalSum = 0;
        while (n > 0) {
            // break down number into digits - get remainder of 10
            const digit = Math.floor(n % 10)
            // then divide number by ten
            n = n / 10;
            // add remainder squared to total sum
            totalSum += digit * digit;
        }
        return totalSum;
    }
    

        // keep track of total sums in object
        let sums = {};
        // while total sum is unique in obj
        while (sums[n] === undefined) {
            // add n to sums;
            sums[n] = 1;
            // n is reassigned to number(n)
            n = nextNumber(n);
        }
        return n === 1;

};