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
// var widthOfBinaryTree = function(root) {
//     // 1
//     // 3 2
//     // 5 n n 9
//     // 6 n n n n n 7 n
//     if (root == null) return 0;
//     let q = [root];
//     let res = 1;
//     while (q.length > 0) {
//         const newQ = [];
//         let index = 0, firstIndex = -1, lastIndex = -1;
//         while (q.length > 0) {
//             const node = q.shift();
//             newQ.push(node?.left);
//             newQ.push(node?.right);
//             if (firstIndex === -1 && node != null) firstIndex = index;
//             if (node != null) lastIndex = index;
//             index++;
//         }
//         const width = lastIndex - firstIndex + 1;
//         if (width > res) res = width;
//         q = newQ;
//         if (lastIndex === -1 && firstIndex === -1) break;
//     }

//     return res;
// };

var widthOfBinaryTree = function (root) {
    // 0
    // 0 1 
    // 0 1 2 3
    // 0 1 2 3 4 5 6 7

    // for each non null node, it has an index i
    // iterate through each level with a queue
    // for each level, we add to the new queue the node's left with index 2i, and the node's right with index 2i + 1
    // we subtract the higest with the lowest index + 1 as the level's width

    let res = 0n;
    let q = [[root, 0n]];
    while (q.length > 0) {
        const newQ = [];
        let minIndex = null, maxIndex = null;
        while (q.length > 0) {
            const next = q.shift();
            const node = next[0];
            const index = BigInt(next[1]);
            if (node == null) continue;
            if (minIndex === null) minIndex = index;
            maxIndex = index;
            newQ.push([node.left, 2n * index]);
            newQ.push([node.right, 2n * index + 1n]);
        }
        if (maxIndex != null && minIndex != null) {
            const width = maxIndex - minIndex + 1n;
            if (width > res) res = width;
        }
        q = newQ;
    }
    return res;
}