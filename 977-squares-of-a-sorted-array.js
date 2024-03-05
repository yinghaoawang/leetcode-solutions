/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // can just square everything then run sort
    // return nums.map(square).toSorted((a,b) => a - b);

    // function square(val) {
    //     return val * val;
    // }

    // Follow up: Squaring each element and sorting the new array is very trivial,
    // could you find an O(n) solution using a different approach?
    
    // can have 2 pointers, one pointing at the first positive & 0 integer, and one pointing at the first negative
    // i create a new array and store the elements in largest abs value
    // iterate thru both pointers where if abs val of the pointed is smaller, then push into arr
    // if left ptr, then decrement, if right ptr then increment
    // i.e -4,-1,0,3,10
    // -4,[-1],[0],3,10 -> [0]
    // -4,[-1],0,[3],10 -> [0,-1]
    // [-4],-1,0,[3],10 -> [0,-1,3]
    // [-4],-1,0,3,[10] -> [0,-1,3,-4]
    // [],-4,-1,0,3,[10] -> [0,-1,3,-4,10]
    // now square each result

    // this works if there is an inflection point
    // corner cases: no inflection point
    let leftP, rightP;
    let prev = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (prev < 0 && num >= 0) {
            leftP = i - 1;
            rightP = i;
            break;
        }
        if (i === nums.length - 1 && num < 0) {
            leftP = nums.length - 1;
            rightP = nums.length;
            break;
        }
        prev = num;
    }

    const sorted = [];
    while (leftP >= 0 || rightP < nums.length) {
        const leftVal = nums[leftP];
        const rightVal = nums[rightP];
        if (leftP < 0) {
            sorted.push(rightVal);
            rightP++;
        } else if (rightP >= nums.length) {
            sorted.push(leftVal);
            leftP--;
        } else {
            if (Math.abs(leftVal) < rightVal) {
                sorted.push(leftVal);
                leftP--;
            } else {
                sorted.push(rightVal);
                rightP++;
            }
        }
    }
    return sorted.map(square);


    function square(val) {
        return val * val;
    }
};