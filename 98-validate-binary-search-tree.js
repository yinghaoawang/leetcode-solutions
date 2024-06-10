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
var isValidBST = function(root) {
    //   2
    //  1 3
    
    // 2 valid
    // 2->1 (1 lt 2)
    // 2->3 (3 gt 2)

    //  5
    // 1  4
    //   3 6
    //
    // 5->1 true
    // 5->4 false

    // brute force is to traverse each node, and check if each subtree is valid

    // THIS IS WRONG because it traverse each node and only checks the left and right if they're correct, need to check whole subtrees

    /*
    function isValid(node) {
        if (node == null) return true;
        if (node.left != null) {
            if (node.left.val >= node.val) return false;
            if (!isValid(node.left)) return false;
        }
        if (node.right != null) {
            if (node.right.val <= node.val) return false;
            if (!isValid(node.right)) return false;
        }
        return true;
    }
    */

    //   5
    // 2    7
    //n 6  3 8

    // THIS IS SLOW because it is brute force

    /*
    function isValid(node) {
        if (node == null) return true;
        if (node.left != null) {
            const stack = [node.left];
            while (stack.length > 0) {
                const stackNode = stack.pop();
                if (stackNode == null) continue;
                if (stackNode.val >= node.val) return false;
                stack.push(stackNode.left);
                stack.push(stackNode.right);
            }
            if (!isValid(node.left)) return false;
        }
        if (node.right != null) {
            const stack = [node.right];
            while (stack.length > 0) {
                const stackNode = stack.pop();
                if (stackNode == null) continue;
                if (stackNode.val <= node.val) return false;
                stack.push(stackNode.left);
                stack.push(stackNode.right);
            }
            if (!isValid(node.right)) return false;
        }
        return true;
    }
    */

    // lb < val < rb (ascending where bounds is lb: -inf and rb: inf)

    //      5
    //   2        7
    //    6     3     8
    //              4       9
    //               100

    // 5l: 2 -> -inf(parent lb)<2<5(parent)
    // 2r: 6 -> 2(parent)<6<5(parent rb)
        // fail at rb

    // 5r: 7 -> 5(parent)<7<inf(parent rb)
    // 7l: 3 -> (parent lb)5<3<(parent)7
        // fail at lb

    // 7r: 8 -> 7(parent)<8<inf(parent rb)

    // 8l: 4 -> 7(parent lb)<4<8(parent)
        // fail at lb
    // 4r: 100 -> 4(parent)<100<8(parent rb)
        // fail at rb

    // when traversing left pass(node, lb, rb) vals(n.left, lb, n.val)
    // when traversing right pass(node, lb, rb) vals(n.right, n.val, rb)

    function isValid(node, lb, rb) {
        if (node == null) return true;
        if (!(lb < node.val && node.val < rb)) return false;
        if (node.left != null) {
            if (!isValid(node.left, lb, node.val)) return false;
        }
        if (node.right != null) {
            if (!isValid(node.right, node.val, rb)) return false;
        }
        return true;
    }

    return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};