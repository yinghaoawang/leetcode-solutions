/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafValue1 = [];
    traverse(root1, leafValue1);
    const leafValue2 = [];
    traverse(root2, leafValue2);

    if (leafValue1.length != leafValue2.length) return false;
    for (let i = 0; i < leafValue1.length; i++) {
        if (leafValue1[i] != leafValue2[i]) return false;
    }
    return true;
};

function traverse(node, leafValue) {
    if (node.left == null && node.right == null) {
        leafValue.push(node.val);
        return;
    }
    if (node.left != null) {
        traverse(node.left, leafValue);
    }
    if (node.right != null) {
        traverse(node.right, leafValue);
    }
}