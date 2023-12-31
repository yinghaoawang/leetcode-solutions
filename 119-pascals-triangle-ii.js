/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // brute force: i can just calculate pascal's triangle and return the row, but the challenge wants me to not use extra space complexity
    // i think i can use a math method, and i'm going to draw out pascal's triangle to see if i can find a formula
    // 0: 1
    // 1: 1 1
    // 2: 1 2 1
    // 3: 1 3 3 1
    // 4: 1 4 6 4 1
    // 5: 1 5 10 5 1
    // 6: 1 6 15 15 6 1
    
    // so it looks like it starts with 1, then the next is i.
    // for i = 5, the third value is 6. i dont see an obvious formula
    
    // i think i can just iterate through pascal's triangle by modifying a single array
    // the corner cases are 1, and 2 where it returns [1] and [1, 1] respectively
    // then i can iterate upwards and only keep track of the current rowIndex array

    let row = [];
    for (let i = 0; i <= rowIndex + 1; i++) {
        const newRow = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) newRow.push(1);
            else newRow.push(row[j - 1] + row[j]);
        }
        row = newRow;
    }
    return row;
};