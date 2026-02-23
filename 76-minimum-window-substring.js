// Really slow solution, lowkey brute force

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    function incrementVal(key, hm) {
        if (hm[key] == null) hm[key] = 0;
        hm[key]++;
    }

    function decrementVal(key, hm) {
        if (hm[key] == null) throw new Error ("Cannot decrement a null value in hashmap for key " + key);
        hm[key]--;
        if (hm[key] === 0) delete hm[key];
    }

    function checkHmFits(hm, matchHM) {
        for (const key in matchHM) {
            if (hm[key] == null) return false;
            if (hm[key] < matchHM[key]) return false;
        }

        return true;
    }

    const countHM = {};
    const pool = [];
    let poolIndex = -1;
    let minCount = Infinity;
    let minString = "";
    const m = s.length;
    const n = t.length;
    const needHM = {};    
    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        if (needHM[c] == null) needHM[c] = 0;
        needHM[c]++;
    }


    for (let i = 0; i < m; i++) {
        const c = s[i];
        if (c in needHM) {
            incrementVal(c, countHM)
            pool.push(i);
            if (pool.length == 1) poolIndex = 0;

            while (checkHmFits(countHM, needHM)) {
                const diff = pool[pool.length - 1] - pool[poolIndex] + 1;
                if (diff < minCount) {
                    minCount = diff;
                    minString = s.substring(pool[poolIndex], pool[pool.length - 1] + 1);
                }
                const firstIndex = pool[poolIndex];
                poolIndex++;
                const firstVal = s[firstIndex];
                decrementVal(firstVal, countHM);
            }
        }
    }

    return minString;
};