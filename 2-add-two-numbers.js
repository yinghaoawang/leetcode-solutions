/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 243 + 564 = 2+5, 6+4 c1, 3+4 = 7,0,8
    let carry = 0;
    let node1 = l1, node2 = l2;
    let resNode;
    let res;
    while (node1 != null || node2 != null) {
        let sum = (node1?.val || 0) + (node2?.val || 0) + carry;
        carry = 0;
        if (sum >= 10) {
            carry = Math.trunc(sum / 10);
            sum %= 10;
        }
        if (resNode === undefined) {
            resNode = new ListNode(sum);
            res = resNode;
        } else {
            const prev = resNode;
            resNode = new ListNode(sum);
            prev.next = resNode;
        }
        node1 = node1?.next;
        node2 = node2?.next;
    }
    if (resNode != null && carry > 0) {
        resNode.next = new ListNode(carry);
    }
    return res;
};