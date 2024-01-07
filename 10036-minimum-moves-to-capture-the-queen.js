// Submitted for Weekly Contest 379

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */

function bishopInTheWay(a,b,c,d,e,f) {
    if (a === e) {
        if (c !== a) return false;
        if (f > b) {
            if (d > b && d < f) return true;
            else return false;
        } else { // b > f
            if (d > f && d < b) return true;
            else return false;
        }
        
    } else if (b === f) {
        if (d !== b) return false;
        if (e > a) {
            if (c > a && c < e) return true;
            else return false;
        } else { // a > e
            if (c > e && c < a) return true;
            else return false;
        }
    } else {
        return false;
    }
}

function rookInTheWay(a,b,c,d,e,f) {
    const goXPos = c < e;
    const goYPos = d < f;
    let bishX = c;
    let bishY = d;
    while (bishX != e, bishY != f) {
        if (bishX === a && bishY === b) return true;
        if (goXPos) bishX++;
        else bishX--;
        if (goYPos) bishY++;
        else bishY--;
    }
    return false;
}

var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    // check if rook is targeting queen
    if (a === e || b === f) { // if they are on same file
        // check if bishop is blocking
        if (bishopInTheWay(a,b,c,d,e,f)) {
            return 2;
        }
        return 1;
    }
    
    // check if bishop is targeting queen
    let first = Math.abs(c - e);
    let second = Math.abs(d - f);
    if (first === second) { // if they are on same diagonal
        // check if rook is blocking
        if (rookInTheWay(a,b,c,d,e,f)) {
            return 2;
        }
        return 1;
    }
    
    // if they are both not, then we can't kill it in 1 turn, and we can always kill it in 2 turns
    return 2;
};