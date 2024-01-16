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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    // get sum, traverse inorder and subtract from the sum every time
    const sum = getSum(root);

    function getSum(node) {
        if (node == null) return 0;
        const lSum = getSum(node.left);
        const rSum = getSum(node.right);
        return lSum + rSum + node.val;
    }

    function traverse(node, value) {
        if (node == null) return value;
        const lVal = traverse(node.left, value);
        
        const origVal = node.val;
        node.val = lVal;

        const rVal = traverse(node.right, lVal - origVal)
        return rVal;
    }

    traverse(root, sum);

    return root;

};