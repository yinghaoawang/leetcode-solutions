/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const findMaxIndex = (arr) => {
        if (arr.length == 0) throw new Error('array is empty');
        let max = arr[0];
        let maxIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }
    const traverse = (arr) => {
        if (arr.length === 0) return null;
        const maxIndex = findMaxIndex(arr);
        const maxVal = arr[maxIndex];
        const leftArr = arr.slice(0, maxIndex)
        const rightArr = arr.slice(maxIndex + 1);
        const node = new TreeNode(maxVal);
        node.left = traverse(leftArr);
        node.right = traverse(rightArr);
        return node;
    }

    return traverse(nums);
};