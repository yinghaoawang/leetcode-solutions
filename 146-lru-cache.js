/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.count = 0;
    this.buckets = [];
    
    this.head; // most recent
    this.tail; // least recent
};

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

LRUCache.prototype.debug = function() {
    let res = '[';
    let node = this.head;
    while (node != null) {
        res += node.val + ',';
        node = node.next;
    }
    res += ']\n';
    res += '[';
    for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i] != null) res += i + ':' + this.buckets[i].val + ' | ';
    }
    res += ']';
    return res;
}

LRUCache.prototype.remove = function(key) {
    if (this.buckets[key] == null) {
        // console.log('remove', key);
        return;
    }
    const node = this.buckets[key];
    if (this.head == node) this.head = node.next; 
    if (this.tail == node) {
        this.tail = node.prev || this.head;
    }

    if (node.prev != null) node.prev.next = node.next;
    if (node.next != null) node.next.prev = node.prev;
    delete this.buckets[key];
    this.count--;
}

LRUCache.prototype.add = function(key, val) {
    const newNode = new Node(key, val);
    if ((this.head == null && this.tail != null) ||
        (this.tail == null && this.head != null)
    ) {
        // console.log('failure',  this.debug());
        throw new Error('bad');
    }

    if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        if (this.head != null) this.head.prev = newNode;
        this.head = newNode;
    }

    this.buckets[key] = newNode;
    this.count++;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.buckets[key] == null) return -1;
    // console.log('get', this.debug());
    const val = this.buckets[key].val;
    // console.log('got ' + val + ' removing ' + key);

    this.remove(key);
    // console.log('removed', key)
    this.add(key, val);
    // console.log('got ', val, this.debug());
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.buckets[key] != null) {
        this.remove(key)
    } else if (this.tail != null && this.count >= this.cap) {
        this.remove(this.tail.key);
    }
    this.add(key, value);
    // console.log('put', this.debug());
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */