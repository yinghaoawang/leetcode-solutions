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
var maxDepth = function (root) {
  // assign depth value for every iteration while iterating through tree
  // keep track of a maxDepth
  // let's do bfs (algorithm doesn't matter because we have to iterate through whole tree)
  // start at head, depth = 1
  // go down each side and assign a depth of 1 more
  // repeat, return if null, whenever depth is max
  // return max value

  let maxDepth = 0;
  const traverse = (node, depth) => {
      if (node == null) return;
      if (depth > maxDepth) maxDepth = depth;
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
  }

  traverse(root, 1);

  return maxDepth;
};