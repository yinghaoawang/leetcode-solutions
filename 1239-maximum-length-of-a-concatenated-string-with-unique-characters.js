/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    // un           iq          ue
    // u1n1len2     i1q1len2    u1e1len2
    const charsArr = [];
    for (let i = 0; i < arr.length; i++) {
        const chars = new Set();
        let validChar = true;
        for (const char of arr[i]) {
            if (chars.has(char)) { // no repeats
                validChar = false;
                break;
            }
            chars.add(char);
        }
        if (!validChar) {
            arr.splice(i, 1);
            i--;
            continue;
        }
        charsArr.push(chars);
    }
    const traverse = (index, currSet) => {
        if (index === arr.length) return currSet.size;
        const currWord = arr[index];
        const currChars = charsArr[index];
        let canTake = true;
        for (const char of currSet) {
            if (currChars.has(char)) {
                canTake = false;
                break;
            }
        }
        if (!canTake) return traverse(index+1, currSet);
        
        for (let char of currWord) {
             currSet.add(char);
        }
        const take = traverse(index+1, currSet);
        for (let char of currWord) {
             currSet.delete(char);
        }
        const notTake = traverse(index+1, currSet);
        return Math.max(take, notTake);
    }
    return traverse(0, new Set());
};