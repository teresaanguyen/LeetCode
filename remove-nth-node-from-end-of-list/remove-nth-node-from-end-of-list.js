/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let currentNode = head;
    while (currentNode) {
        count++
        currentNode = currentNode.next;
    }
    if (count === 1 && n === 1) {
        return null;
    }
    let nodeRemove = count - n;
    currentNode = head;
    if (nodeRemove === 0) {
        head = head.next;
    }
    for (let i = 1; i < nodeRemove; i++) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    return head;
};