/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let listValues = [];
    // iterate through head
    while (head) {
        // add each value to array
        listValues.push(head.val)
        head = head.next;
    }
    // use two pointers to check if palindrome on array
    let i = 0;
    let j = listValues.length - 1;
    while (i < j) {
        if (listValues[i] !== listValues[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};