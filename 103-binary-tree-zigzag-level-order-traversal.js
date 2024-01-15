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
var zigzagLevelOrder = function(root) {
    let q = [root];
    let goLeft = true;
    let res = [];
    while (q.length > 0) {
        const levelArr = [];
        const newQ = [];
        while (q.length > 0) {
            const node = q.shift();
            if (node == null) continue;
            levelArr.push(node.val);
            newQ.push(node.left);
            newQ.push(node.right);
        }
        q = newQ;
        if (!goLeft) levelArr.reverse();
        if (levelArr.length > 0) res.push(levelArr);
        goLeft = !goLeft;
    }
    return res;
};