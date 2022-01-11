/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // variable result to hold different elements
    let result = [];
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        // if element is not found in result
        if (result.indexOf(nums[i]) === -1) {
            // add to result
            result.push(nums[i])
        } else {
            // if element is found in result
            const duplicate = result.indexOf(nums[i]);
            // remove from result
            const removed = result.splice(duplicate, 1)
        }
    }
    // return element in result
    return result[0];
};