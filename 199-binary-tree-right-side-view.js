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
 * @return {number[]}
 */
var rightSideView = function(root) {
    //     1
    //    2  3
    //      4
    //     5
    //    6 7
    // get right, if no right, get left
    // need to get the nodes that are longest on the left
    // const res = [];
    // let node = root;
    // while (node != null) {
    //     res.push(node.val);
    //     if (node.right != null) {
    //         node = node.right;
    //     } else {
    //         node = node.left;
    //     }
    // }
    // return res;
    // this method was dfs. i failed trying to do it

    // bfs - level traversal solution
    const res = [];
    let q = [];
    if (root != null) {
        res.push(root.val);
        q.push(root);
    }
    while (q.length > 0) {
        const q2 = [];
        for (const node of q) {
            if (node.left != null) q2.push(node.left);
            if (node.right != null) q2.push(node.right);
        }
        if (q2.length > 0) {
            const rightNode = q2[q2.length - 1];
            res.push(rightNode.val);
        }
        q = q2;
    }
    return res;
};