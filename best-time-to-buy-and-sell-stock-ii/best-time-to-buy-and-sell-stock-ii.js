/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // keep track of max profit
    let maxProfit = 0;
    // iterate through array
    for (let i = 1; i < prices.length; i++) {
    // if previous element is smaller than current element
        if (prices[i - 1] < prices[i]) {
            // add difference to max profit  
            maxProfit += (prices[i] - prices[i - 1])
        }  
    }
    return maxProfit;
};