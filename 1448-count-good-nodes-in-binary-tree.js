/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    //      3
    //   1    4
    // 3     1 5

    // 3 good, 1 bad, 3 good
    // 4 good, 1 bad, 5 good

    // brute force methods
    // 1. can create an array storing all the values while traversing tree (better speed)
    // 2. can constantly traverse the tree (better space)

    // lets do method
    let res = 0; 

    function isGood(arr, val) {
        for (const el of arr) {
            if (el > val) return false;
        }
        return true;
    }

    function traverse(node, arr) {
        if (node == null) return;
        arr.push(node.val);

        if (isGood(arr, node.val)) res++;
        traverse(node.left, arr);
        traverse(node.right, arr);

        arr.splice(arr.length - 1, 1);
    }
    
    traverse(root, []);
    return res;
};