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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const traverse = (left, right) => {
        if (left == null && right != null) return false;
        if (right == null & left != null) return false;
        if (left == null && right == null) return true;

        if (left.val != right.val) return false;
        if (traverse(left.left, right.right) == false) return false;
        if (traverse(left.right, right.left) == false) return false;
        return true;
    }
    return traverse(root, root);
};