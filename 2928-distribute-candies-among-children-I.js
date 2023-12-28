/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    // distribute 5 candies between 3 children so no child gets more than 2
    // 2,2,1 2,1,2 1,2,2

    // n = 3, limit = 3
    // 3,0,0 2,1,0 2,0,1 1,2,0 1,1,1 1,0,2 0,3,0 0,2,1 0,1,2 0,0,3

    // n=10 limit=5
    // 5,5,0 5,4,1 5,3,2 5,2,3 5,1,4 5,0,5
    // 4,5,1 4,4,2 4,3,3 4,2,4, 4,1,5

    let res = 0;
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                if (i + j + k === n) res++;
            }
        }
    }
    return res;
};