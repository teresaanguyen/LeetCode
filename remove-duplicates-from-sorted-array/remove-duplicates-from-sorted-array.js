/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // if nums length is 0 or 1 return length
    if (nums.length === 0 || nums.length === 1) {
        return nums.length;
    }
    // create point1 equal to first element
    let point1 = 0;
    // create point2 equal to second element
    let point2 = 1;
    // while loop until point1 is equal to length of nums
    while (point1 < nums.length - 1) {
    // if point2 is not equal to point1
        if (nums[point2] !== nums[point1]){
            // increment both point1 and point2
            point1++;
            point2++;
        }
    // if point2 is equal to point1 
        if (nums[point2] === nums[point1]) {
            // then remove element at point2 
            nums.splice(point2, 1)
        }
    }
    // return length of nums   
    return nums.length;
};