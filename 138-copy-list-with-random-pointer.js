/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let prev;
    let cloneHead = null;

    let node = head;
    const arr = [];
    const map = new Map();
    let index = 0;
    while (node != null) {
        const clone = new Node(node.val, null, null);
        if (cloneHead == null) cloneHead = clone;
        if (prev != null) {
            prev.next = clone;
        }

        arr.push(clone);
        map.set(node, index);
        index++;

        prev = clone;
        node = node.next;
    }

    node = head;
    index = 0;
    while (node != null) {
        const randomIndex = map.get(node.random);
        arr[index].random = arr[randomIndex];
        node = node.next;
        index++;
    }
    return cloneHead;
};