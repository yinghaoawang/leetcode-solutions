var diameterOfBinaryTree = function(root) {
  // traverse the binary tree
  // value of a node is max(left, right) + 1
      // if is leaf node, value is 0
  // diameter of a node is left + right + (number of children - represents each edge)
  
  let maxDiameter = 0;

  const traverse = (node) => {
      // if it is a leaf node, then the value is zero
      if (node.left == null && node.right == null) return 0;

      const leftVal = node.left == null ? 0 : traverse(node.left);
      const rightVal = node.right == null ? 0 : traverse(node.right);

      let numOfEdges = 0;
      if (node.left != null) numOfEdges++;
      if (node.right != null) numOfEdges++;

      const diameter = leftVal + rightVal + numOfEdges;
      if (diameter > maxDiameter) maxDiameter = diameter;

      // value of a non-leaf node is max(left, right) + 1
      return Math.max(leftVal, rightVal) + 1;
  }

  traverse(root);

  return maxDiameter
};