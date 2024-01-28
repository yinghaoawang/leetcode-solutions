/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // if one zero, then all answer is 0 zero except index of zero
    // if one or more zero, then all answer is 0
    // if no zero, then answer is prod/currVal
    // let zeroIndex = -1;
    // let zeroCount = 0;
    // let prod = 1;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         zeroCount++;
    //         zeroIndex = i;
    //         if (zeroCount > 1) return new Array(nums.length).fill(0);
    //     } else {
    //         prod *= nums[i];
    //     }
    // }

    // let res = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (zeroIndex > -1) {
    //         if (i != zeroIndex) {
    //             res.push(0);
    //         } else {
    //             res.push(prod);
    //         }
    //     } else {
    //         res.push(prod / nums[i]);
    //     }
    // }
    // return res;

    // I WAS NOT ALLOWED TO USE THE DIVISION OPERATOR
    
    // 1,2,3,4

    // x,2,3,4
    // 1,x,3,4
    // 1,2,x,4
    // 1,2,3,x

    // [],x,[2,3,4]
    // [1],x,[3,4]
    // [1,2],x,[4]
    // [1,2,3],x,[]

    // x[4*3*2]
    // [1]x[4*3]
    // [1*2]x[4]
    // [1*2*3]x

    // [1, 1*2, 1*2*3, 1*2*3*4]
    // [4*3*2*1, 4*3*2, 4*3, 4]

    // lArr:[1,2,6,24]
    // rArr:[24,24,12,4]

    // 0 x[r[1]]
    // 1 [l[0]]x[r[2]]
    // 2 [l[1]]x[r[3]]
    // 3 [l[2]]x

    const lArr = Array(nums.length), rArr = Array(nums.length);

    // handle corner case of any zeroes
    let zeroIndex = -1;
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroIndex = i;
            zeroCount++;
            // handle 2+ zeros corner case
            if (zeroCount > 1) return Array(nums.length).fill(0);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        lArr[i] = nums[i] * (lArr[i-1] || 1);
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        rArr[i] = nums[i] * (rArr[i+1] || 1);
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
         res[i] = (lArr[i-1] || 1) * (rArr[i+1] || 1);
         if (zeroCount === 1) { // handle one zero corner case
             if (zeroIndex != i) res[i] = 0;
         }
    }
    return res;
};