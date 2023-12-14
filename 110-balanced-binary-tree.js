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
var isBalanced = function(root) {
  // height-balanced = the depth of the two subtrees of every node never differs by more than one.
  let res = true;

  const traverse = (node) => {
      if (node == null) return 0;
      const leftDepth = traverse(node.left);
      const rightDepth = traverse(node.right);

      if (Math.abs(leftDepth - rightDepth) > 1) res = false;
      return Math.max(leftDepth + 1, rightDepth + 1)
  }

  traverse(root, 0);
  return res;
};