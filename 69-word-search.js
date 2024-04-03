/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function newWalked() {
        const walked = [];
        for (let i = 0; i < board.length; i++) {
            walked[i] = new Array(board[i].length).fill(false);
        }
        return walked;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                const walked = newWalked();
                // console.log('starting at', i, j);
                if (checkExists(i, j, 0, walked)) return true;
            }
        }
    }
    return false;

    function checkExists(i, j, index, walked) {
        if (index > word.length - 1) {
            // console.log('exists', i, j);
            return true;
        }

        if (i < 0 || i > board.length -1 || j < 0 || j > board[i].length - 1) return false;
        if (walked[i][j]) return false;
        if (board[i][j] != word[index]) return false;
        
        walked[i][j] = true;
        // console.log('walked thru ', i, j, index);

        // if (checkExists(i+1, j+1, index+1, walked)) return true;
        // if (checkExists(i+1, j-1, index+1, walked)) return true;
        if (checkExists(i+1, j, index+1, walked)) return true;

        if (checkExists(i, j+1, index+1, walked)) return true;
        if (checkExists(i, j-1, index+1, walked)) return true;

        // if (checkExists(i-1, j+1, index+1, walked)) return true;
        // if (checkExists(i-1, j-1, index+1, walked)) return true;
        if (checkExists(i-1, j, index+1, walked)) return true;

        walked[i][j] = false;
        // console.log('failed', i, j, index);

        return false;
    }
};