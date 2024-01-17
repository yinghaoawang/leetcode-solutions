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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // dfs, for each node, do a dfs to compare, if one matches, then true
    const checkEqual = (node, subNode) => {
        if (node == null && subNode == null) return true;
        if (node == null || subNode == null) return false;

        if (node.val != subNode.val) return false;
        return checkEqual(node.left, subNode.left) && checkEqual(node.right, subNode.right);
    }

    if (root == null && subRoot == null) return true;
    if (root == null) return false;

    if (checkEqual(root, subRoot)) return true;
    if (isSubtree(root.left, subRoot)) return true;
    if (isSubtree(root.right, subRoot)) return true;
    return false;
};