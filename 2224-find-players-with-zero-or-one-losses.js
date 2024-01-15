/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // create map that stores losses for each player
    // iterate through matches array
    // increment the loser's map value by one
    
    // create array to store 0 and 1 losses
    // iterate through map, store the people with 0 losses and 1 losses in their result arrays respectively
    // sort both the arrays

    const map = new Map();
    const players = new Set();
    for (let i = 0; i < matches.length; i++) {
        const loser = matches[i][1];
        const mapVal = map.get(loser);
        if (mapVal === undefined) map.set(loser, 1);
        else map.set(loser, mapVal + 1);
        players.add(matches[i][0]);
        players.add(matches[i][1]);
    }

    const res = [[],[]];
    players.forEach(player => {
        const mapVal = map.get(player);
        if (mapVal === undefined) {
            res[0].push(player);
        } else if (mapVal === 1) {
            res[1].push(player);
        }
    })

    res[0].sort((a,b) => a - b);
    res[1].sort((a,b) => a - b);

    return res;
};