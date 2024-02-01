/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // O(N^2) - Set method
    // 73 74 75 71

    // set: {1,74}
    // const set = new Set();
    // const res = Array(temperatures.length).fill(0);
    // for (let i = 0; i < temperatures.length; i++) {
    //     for (const item of set) {
    //         if (item.val < temperatures[i]) {
    //             res[item.index] = i - item.index;
    //             set.delete(item);
    //         }

    //     }
    //     set.add({
    //         index: i,
    //         val: temperatures[i]
    //     });
    // }
    // return res;
    // TOO SLOW

    // O(N) - stack method
    //        69
    // 4  3  1  1
    const res = Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        while (stack.length > 0) {
            const top = stack[stack.length - 1];
            if (top.val < temp) {
                res[top.index] = i - top.index;
                stack.pop();
            } else {
                break;
            }
        }
        stack.push({
            index: i,
            val: temp
        });
    }
    return res;
};