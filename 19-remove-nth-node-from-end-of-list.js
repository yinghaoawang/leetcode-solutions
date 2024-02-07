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
    let length = 0;
    let node = head;
    while (node != null) {
        length++;
        node = node.next;
    }
    const targetIndex = length - n;

    // if removing head, then n = 1
    if (targetIndex === 0) return head.next;
    // if next index is n, then remove it while traversing
    function traverse(node, index) {
        if (index + 1 === targetIndex) {
            node.next = node.next?.next;
            return;
        }
        traverse(node.next, index + 1);
    }
    traverse(head, 0);
    return head;
};