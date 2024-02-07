/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // set solution for a BT
    // let res;
    // function traverse(node) {
    //     if (res !== undefined) return new Set();
    //     if (node == null) return new Set();

    //     const leftSet = traverse(node.left);
    //     const rightSet = traverse(node.right);
    //     const set = new Set([...leftSet, ...rightSet, node.val]);

    //     if (set.has(p.val) && set.has(q.val) && res === undefined) res = node;
    //     return set;
    // }
    // traverse(root);
    // return res;

    // unfortunate i didn't realize it's a BST
    
    // go to a node that is between p and q
    // this node is not smaller than both p and q
    // this node is not larger than both p and q

    // handle cases
    // is val equal to p

    // is val equal to q

    //...
    // i guess the first value we find between p and q must be the lca

    function traverse(node) {
        if (node == null) return;
        console.log(node.val);
        if (node.val > p.val && node.val > q.val) {
            return traverse(node.left);
        }
        if (node.val < p.val && node.val < q.val) {
            return traverse(node.right);
        }
        return node;
    }
    return traverse(root);
};
