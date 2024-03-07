/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // i can think of 2 ways
    // one finds the length of list and returns the middle
    // the other way uses a slow and fast pointer

    // length
    let length = 0;
    let node = head;
    while (node != null) {
        length++;
        node = node.next;
    }
    let targetIndex = Math.trunc(length / 2);
    let res = head;
    for (let i = 0; i < targetIndex; i++) res = res.next;
    return res;

    // slow and fast pointer
    let slow = head;
    let fast = head?.next;
    while (fast != null) {
        slow = slow.next;
        fast = fast?.next?.next;
    }
    return slow;
};

