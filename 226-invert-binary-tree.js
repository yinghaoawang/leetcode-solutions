function invertTree(root) {
  // trees have a value, left, and right property
  // to invert a tree, i have to swap the children of the head
  // it looks like i do this for every node from top to bottom

  // first example

  //   (4)
  //  2   7
  // 1 3 6 9

  //    4
  // (7)  2
  // 6 9 1 3

  //    4
  //  7   2
  // 9 6 1 3
  // no children in 9 and 6

  //    4
  //  7  (2)
  // 9 6 1 3

  //    4
  //  7   2
  // 9 6 3 1
  // no children in 3 and 1
  // looks correct

  // new example

  // (2)
  // 1 3

  //  2
  // 3 1
  // no children in 3 and 1

  const invertNode = (node) => {
      if (node == null) return;
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;
      invertNode(node.left);
      invertNode(node.right);
  }

  invertNode(root);
  return root;
};