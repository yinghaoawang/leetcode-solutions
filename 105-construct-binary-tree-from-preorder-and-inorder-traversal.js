/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 3 9 20 15 7
    // 9 3 15 20 7
    
    //    3
    //  9  20
    //    15  7

    let root, node;
    let preArr = [];
    let nodeMap = {};
    let nextRight = false;
    let j = 0;

    for (let i = 0; i < preorder.length; i++) {
        let val = preorder[i];
        let newNode = new TreeNode(val);
        if (root == null) {
            root = newNode;
        } else if (nextRight) {
            node.right = newNode;
            nextRight = false;
        } else if (node.left == null) {
            node.left = newNode;
        } else {
            node.right = newNode;
        }
        node = newNode;
        preArr.push(val);
        nodeMap[val] = newNode;
        // console.log('val', val);
        
        while (preArr.includes(inorder[j])) {
            node = nodeMap[inorder[j]];
            nextRight = true;
            // console.log(inorder[j]);
            j++;
        }
    }

    return root;
};