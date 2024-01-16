
var RandomizedSet = function() {
    this.values = [];
    this.map = {};
    this.count = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] != null) return false;
    this.values[this.count] = val;
    this.map[val] = this.count;
    this.count++;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */

// 5 3 { 5: 0, 3: 1 } 
// action: remove 5
// map[5] is where 5 is stored in the values
// count - 1 is where the last value is stored

// swap values values[map[5]] and values[count-1]
// set map values accordingly, delete map[5], map[values[count-1]]=map[5]

// decrement count


RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] == null) return false;
    const valIndex = this.map[val];
    const lastValIndex = this.count - 1;
    const lastVal = this.values[lastValIndex];

    this.values[lastValIndex] = val;
    this.values[valIndex] = lastVal;
    this.map[lastVal] = valIndex;
    delete this.map[val];

    this.count--;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randInt = Math.floor(Math.random() * this.count);
    return this.values[randInt];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */