/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 100 4 200 1 3 2
    // 1234    100     200
    // a consecutive group is defined as a left and right
    
    // we have a set of nums
    
    // we iterate through original nums arr
    // and check if el is a left
        // if it is, then we keep checking +1 until we reach the end, and that is the length of the group

    // it is O(n)
        // O(n) to create set
        // O(n) to look through each element in the set
            // O(1) to check the set
            // O(1) to check a group size, is it O(N) since worst case we check through whole N again?

    let res = 0;

    let set = new Set();
    for (const n of nums) set.add(n);
    for (const n of nums) {
        const isLeftmost = !set.has(n-1);
        if (!isLeftmost) continue;
        let i = 0;
        while (set.has(n+i)) {
            i++;
        }
        if (i > res) res = i;
    }

    return res;
    
};