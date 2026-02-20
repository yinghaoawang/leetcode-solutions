/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */

var findWinningPlayer = function(skills, k) {
    let wins = 0;
    let firstI = 0;
    for (let i = 1; i < skills.length; i++) {
        const secondI = i;

        const firstSkill = skills[firstI];
        const secondSkill = skills[secondI];

        if (firstSkill > secondSkill) {
            wins++;
        } else {
            wins = 1;
            firstI = secondI;
        }

        if (wins === k) return firstI;
    }

    return firstI;
};