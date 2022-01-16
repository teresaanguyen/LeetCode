/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // two pointers
    // one at front
    let front = 0;
    // one at end
    let end = numbers.length - 1;
    while (front < end) {
        // if sum equals target
        if (numbers[front] + numbers[end] === target) {
        // return front and end
            return [front + 1, end + 1]
        }
        // if sum does not equal target
        if (numbers[front] + numbers[end] < target) {
            // move front one
            front++;
        } else {
            end--;
        }
    }
};