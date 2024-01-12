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
 * @return {string}
 */
var tree2str = function(root) {
    // 1 
    // left: ( ->
        // 2
        // left: ( ->
            // 4
            // left: no child
            // right: no child
        // finishedleft: )
        // right: no child
    // finishedleft: )
    // right: (
        // 3
        // left: nochild
        // right no child
    //finishedright: )
    let result = '';
    tree2strRecursive(root);
    return result;

    function tree2strRecursive(node) {
        result += node.val;
        if (node.left == null && node.right != null) {
            result += '()';
        }
        if (node.left != null) {
            result += '(';
            tree2strRecursive(node.left);
            result += ')';
        }
        if (node.right != null) {
            result += '(';
            tree2strRecursive(node.right);
            result += ')';
        }
    }
}
