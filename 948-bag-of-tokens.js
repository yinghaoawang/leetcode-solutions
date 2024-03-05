/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    // 100,200,300,400 p=200 s=0
    // face up first one
    // 200,300,400 p=100 s=1
    // if cannot face up first one, face down last one
    // 200,300 p=500 s=0
    // 300 p=300 s=1
    // p=0 s=2

    // corner cases: none
    
    // assumptions: sorted ascending

    tokens.sort((a,b) => a - b);
    let maxScore = 0, score = 0;
    while (tokens.length > 0) {
        if (power >= tokens[0]) {
            power -= tokens[0];
            tokens.splice(0, 1);

            score++;
            if (score > maxScore) maxScore = score;
        } else if (score >= 1) {
            power += tokens[tokens.length - 1];
            tokens.pop();

            score--;
        } else {
            // no playable moves
            break;
        }
    }
    return maxScore;
};