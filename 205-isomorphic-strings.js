/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // e
    // a
    // e is mapped to a
    // eg
    // ad 
    // g is mapped to d
    // egg
    // add
    // g is mapped to d (existing mapping, correct mapping)
    let mapStoT = {};
    let mapTtoS = {};

    for (let i = 0; i < s.length; i++) {
        const sVal = s[i], tVal = t[i];
        if (mapStoT[sVal] != undefined && mapStoT[sVal] != tVal) return false;
        if (mapTtoS[tVal] != undefined && mapTtoS[tVal] != sVal) return false;
        mapStoT[sVal] = tVal;
        mapTtoS[tVal] = sVal;
    }
    return true;
};