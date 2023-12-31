// reused from 36 valid sudoku
const isValidSudoku = function(board) {
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

const solveSudokuRecursive = (board, currRow, currCol) => {
    if (!isValidSudoku(board)) return false;
    if (currCol >= 9) { // increment the row if col is beyond limits
        currCol = 0;
        currRow++;
    }

    if (currRow >= 9) return true; // if we have reached the end of the board and it is still valid, then this is a valid solution

    if (board[currRow][currCol] !== '.') { // if the spot is not empty, go to next spot
        return solveSudokuRecursive(board, currRow, currCol + 1);
    }

    for (let i = 1; i <= 9; i++) { // for the current cell, we try every digit to see if it's valid
        board[currRow][currCol] = i + '';
        let res = solveSudokuRecursive(board, currRow, currCol + 1); // we check the next cell if it's valid (recursive case)
        if (res) return res; // if the board could not be valid given this digit, then we reset and try another digit
        board[currRow][currCol] = '.';
    }
    
    return false; // if no digit is valid, then it is not valid
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // brute force
    // i can try every letter for every cell to see if its valid recursively
    solveSudokuRecursive(board, 0, 0);
};
