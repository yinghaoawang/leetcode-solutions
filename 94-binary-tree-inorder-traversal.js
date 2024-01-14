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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     const traverse = (node, res) => {
//         if (node == null) return res;
//         traverse(node.left, res);
//         res.push(node.val);
//         traverse(node.right, res);
//         return res;
//     }

//     return traverse(root, []);
// };

// challenger- iterative solution
var inorderTraversal = function (root) {
    const stack = [];
    let node = root;
    const res = [];

    while (node != null || stack.length > 0) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }
    return res;
};
