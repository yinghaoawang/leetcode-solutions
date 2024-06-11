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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // brute force

    // can go leftmost get first
    // then minus k by 1
    // if k == 0, return node.val

    // then go right and keep traverse left
    // minus k by 1
    
    // if no right, return

    //     3
    //  1   4
    //   2

    // 3 go left 1
    // 1 go left, no left, k--
    // 1 go right 2
    // 2 go left, no left, k--
    // 2 go right, no right
    // 1..., right done
    // 3 go right 4
    // 4 no left, k--
    // 4 no right
    // 3 right done
    // done

    function traverse(node) {
        if (node == null) return;
        const lRes = traverse(node.left);
        if (lRes != null) return lRes;
        k--;
        if (k == 0) return node.val;
        const rRes = traverse(node.right);
        if (rRes != null) return rRes;
    }

    return traverse(root);
};