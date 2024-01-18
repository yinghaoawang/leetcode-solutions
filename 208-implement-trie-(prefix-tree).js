var Node = function (val, children) {
    this.val = val === undefined ? null : val;
    this.children = children === undefined ? [] : children;
}

var Trie = function () {
    this.head = new Node('');
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    // []
    // [a,b,c]
    // [p][e][a]
    // [p][e][r]
    let node = this.head;
    for (let char of word) {
        const found = node.children.find(c => c.val === char);
        if (!found) {
            const newNode = new Node(char);
            node.children.push(newNode);
            node = newNode;
            continue;
        }
        node = found;
    }
    node.children.push(new Node(''));
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.head;
    for (let char of word) {
        const found = node.children.find(c => c.val === char);
        if (!found) return false;
        node = found;
    }

    return node.children.find(c => c.val === '') != null;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.head;
    for (let char of prefix) {
        const found = node.children.find(c => c.val === char);
        if (!found) return false;
        node = found;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */