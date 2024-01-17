/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     // all subsets -> backtracking
//     // man i'm so dumb
    
//     const res = [[]];
//     const traverse = (i, currArr) => {
//         if (i === nums.length) return;
//         for (let num of nums) {
//             if (currArr.includes(num)) continue;
//             if (num > currArr[currArr.length - 1]) continue;
//             let clone =  Array.from(currArr);
//             clone.push(num);
//             res.push(clone);
//             traverse(i + 1, clone);
//         }
//     }
//     traverse(0, []);
//     return res;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // don't want repeats, so i will look at each number in the set and decide to add it to my curr arr or not
    const res = [];
    const traverse = (i, currArr) => {
        if (i === nums.length) {
            res.push(currArr);
            return;
        };
        traverse(i + 1, currArr); // don't take from set
        traverse(i + 1, [...currArr, nums[i]]); // take from set
    }
    traverse(0, []);
    return res;

    // is this even backtracking?
    // just feels like i'm completely going through
};