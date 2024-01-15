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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    let q = [root];
    while (q.length > 0) {
        const newQ = [];
        const levelArr = [];
        while (q.length > 0) {
            const node = q.shift();
            if (node == null) continue;

            levelArr.push(node.val);
            newQ.push(node.left);
            newQ.push(node.right);
        }
        if (levelArr.length > 0) res.push(levelArr);
        q = newQ;
    }
    return res;
};