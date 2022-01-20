/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // create reversed variable equal to 0
    let reversed = 0;
    let sign = false;
    // check if negative
    if (x < 0) {
        // if negative multiply by -1
        sign = true;
        x = x * -1;
    }
    // while x is falsy
    while (x) {
        // reversed is equal to reversed multipled by 10 plus x % 10
        reversed = 10 * reversed + (x % 10);
        // then math.floor x
        x = Math.floor(x/10)
        if (reversed > 2**31) {
            return 0
        }
    }
    return sign ? reversed*-1 : reversed;    
};