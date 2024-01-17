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
 * @return {string[][]}
 */
var printTree = function(root) {
    let height = 0;
    function getHeight(node, level) {
        if (node == null) return level - 1;
        return Math.max(getHeight(node.left, level + 1), getHeight(node.right, level + 1));
    }

    function traverse(node, row, col, res) {
        if (node == null) return;
        res[row][col] = node.val + '';
        traverse(node.left, row + 1, col - Math.pow(2, height - row - 1), res);
        traverse(node.right, row + 1, col + Math.pow(2, height - row - 1), res);
    }

    let res = [];
    height = getHeight(root, 0);
    const rowCount = height + 1;
    const colCount = Math.pow(2, height + 1) - 1;

    for (let i = 0; i < rowCount; i++) {
        res.push(Array(colCount).fill(''));
    }
    traverse(root, 0, (colCount - 1) / 2, res);
    return res;
};