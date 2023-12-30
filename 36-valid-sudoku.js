/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // brute force
    // check whole board for each of these cases
    // 1. all rows contains 1-9 max count 1
    // 2. all cols contain 1-9 max count 1
    // 3. all boxes contain 1-9 max count 1
    // to calculate each box, 0-8 as index, row = index % 3, col = (int) index / 3
    // to check if each case has at max one, i will create a map of each number, and check if it exists, if it does exist, then return false

    // check rows
    for (let row = 0; row < board[0].length; row++) {
        const numberMap = {}
        for (let col = 0; col < board.length; col++) {
            const number = board[row][col];
            if (number === '.') continue;
            if (numberMap[number] != null) return false;
            numberMap[number] = 1;
        }
    }

    // check cols
    for (let col = 0; col < board.length; col++) {
        const numberMap = {}
        for (let row = 0; row < board[0].length; row++) {
            const number = board[row][col];
            if (number === '.') continue;
            if (numberMap[number] != null) return false;
            numberMap[number] = 1;
        }
    }

    // check boxes
    for (let i = 0; i < 9; i++) {
        const startRow = (i % 3) * 3;
        const startCol = Math.floor(i / 3) * 3;

        const numberMap = {};
        for (let j = 0; j < 9; j++) {
            const offsetRow = Math.floor(j / 3);
            const offsetCol = j % 3;
            
            const row = startRow + offsetRow;
            const col = startCol + offsetCol;

            const number = board[row][col];
            if (number === '.') continue;
            if (numberMap[number] != null) return false;
            numberMap[number] = 1;
        }
    }

    return true;
};