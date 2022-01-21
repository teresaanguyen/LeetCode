/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        // find difference of target and element
        const diff = target - nums[i];
        // check objec to see if difference is present
        // if not present
        if (obj[diff] === undefined) {
            // add to object
            obj[nums[i]] = i;
        // if present
        } else {
            // return i and value of different pair in obj
            return [i, obj[diff]]
        }
    }
};