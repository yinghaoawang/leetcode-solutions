/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    // create a map where key is number, and value is count
    // 2 3 3 2 2 4 2 3 4
    // 2:4 3:3 4:2
    // divide each value by 3, and then divide the remainder by 2, add them to value each time, remainder is -1, return -1
    // +2 +1 +1

    // doesnt work for value 10
    // 10/3 = 3R1
    // should be 10-4=6/3=2R0

    // new algorithm:
    // subtract each value by 2 and add res by 1 until it is divisible by 3
    // if the value reaches -1, then return -1

    // 2:10 0
    // 2:8 1
    // 2:6 2
    // 2:0 2
    // res = 4

    const numMap = [];
    for (num of nums) {
        if (numMap[num] == null) numMap[num] = 1
        else numMap[num]++;
    }

    let res = 0;
    for (const key in numMap) {
        let value = numMap[key];
        while (value > 1) {
            console.log('vd3', value / 3);
            if (value % 3 === 0) {
                res += value / 3;
                value = 0;
            } else {
                value -= 2;
                res++;
            }
        }
        if (value === 1) return -1;
    }
    return res;
};