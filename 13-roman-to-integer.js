/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // I = 1, III = 3
    // IV = 4
    // V = 5, VIII = V + III = 8
    // X = 10, IX = 9
    // XIII = X + III = 13
    
    // find tokens from L to R, in this order
    // IV = 4, IX = 9, I = 1
    // XL = 40, XC = 90, X = 10, V = 5
    // CD = 400, CM = 900, L = 50, C = 100
    // D = 500, M = 1000

    // O(N)
    // another token order can work is 2 digits then one
    // IV, IX, XL, XC, CD, CM
    // I, V, X, L, C, D, M
    // let res = 0;
    // const pairMap = {
    //     'IV': 4,
    //     'IX': 9,
    //     'XL': 40,
    //     'XC': 90,
    //     'CD': 400,
    //     'CM': 900
    // }
    // const singleMap = {
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000
    // }

    // for (let i = 0; i < s.length; i++) {
    //     const currChar = s[i];
    //     const nextChar = i + 1 < s.length ? s[i + 1] : null;
    //     let value = pairMap[currChar + nextChar];
    //     if (value == null) {
    //         value = singleMap[currChar];
    //     } else {
    //         i++;
    //     }
    //     res += value;
    // }
    
    // return res;

    // faster solution, and more intuitive:
    // i.e IX = 9, IV = 4, I = 1, XII = 7
    // if the next character is larger than the current, then we subtract the value from the sum
    // i.e w/ M, CM = 900, CD = 400

    let res = 0;
    const singleMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        const currValue = singleMap[s[i]];
        const nextValue = singleMap[s[i + 1]];

        if (currValue < nextValue) {
            res -= currValue;
        } else {
            res += currValue;
        }
    }
    
    return res;
};