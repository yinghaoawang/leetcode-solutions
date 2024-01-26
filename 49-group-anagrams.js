/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // create a tuple array where 1st value is word 2nd value is sorted
    // eat,aet tea,aet tan,ant ate,aet nat,ant bat,abt
    // iterate through tuple array, and store into map[sortedVal]=[...,regVal]

    const map = {};
    for (let str of strs) {
        const sortedVal = str.split('').toSorted().join('');
        if (map[sortedVal] === undefined) map[sortedVal] = [];
        map[sortedVal].push(str); 
    }
    const res = [];
    for (let key in map) {
        res.push(map[key]);
    }
    return res;
};