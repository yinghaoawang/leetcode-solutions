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
var pseudoPalindromicPaths = function (root) {
    // start at root, and end on leaf node
    // keep track of current str
    // if at leaf node && curr str is a palindrome, increment res

    function isPalindrome(map) {
        let numOdds = 0;
        for (const key in map) {
            if (map[key] % 2 === 1) numOdds++;
            if (numOdds > 1) return false;
        }
        return true;
    }

    let res = 0;
    function traverse(node, map) {
        if (node == null) return;

        const char = node.val
        if (map[char] == null) map[char] = 0;
        map[char]++;

        if (node.left == null && node.right == null) {
            if (isPalindrome(map)) res++;
            return;
        }

        traverse(node.left, { ...map });
        traverse(node.right, { ...map });
    }
    traverse(root, {});
    return res;
};