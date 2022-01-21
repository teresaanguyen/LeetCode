/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastIndexNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastIndexNonZero] = nums[i];
            lastIndexNonZero++
        }
    }
    for (let i = lastIndexNonZero; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums;
};